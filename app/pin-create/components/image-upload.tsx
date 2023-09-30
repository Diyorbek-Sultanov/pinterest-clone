'use client'

import { useCallback, useState } from 'react'
import { Trash2 } from 'lucide-react'
import { useDropzone } from 'react-dropzone'

import { cn } from '@/lib/utils'

import { Button } from '../../../components/ui/button'
import MyImage from '../../../components/ui/image'

interface IImageUploadProps {
	onChange: (path: File[]) => void
}

const ImageUpload: React.FC<IImageUploadProps> = ({ onChange }) => {
	const [files, setFiles] = useState<(File & { preview: string })[]>()

	const { getInputProps, getRootProps, isDragActive } = useDropzone({
		maxFiles: 1,
		onDrop: acceptedFiles => {
			const images = acceptedFiles.map(file =>
				Object.assign(file, { preview: URL.createObjectURL(file) })
			)

			setFiles(images)

			onChange(acceptedFiles.map(file => file))
		},
	})

	const removeImage = useCallback((imageUrl: string) => {
		setFiles(files?.filter(file => file.preview !== imageUrl))
	}, [])

	return (
		<div
			className={cn(
				'border-2 border-dashed h-[580px] dark:bg-gray-600/40 rounded-md w-full border-gray-400',
				isDragActive && 'border-purple-600 dark:bg-slate-700'
			)}
		>
			{files && files.length ? (
				files.map(file => (
					<div className='w-full h-full relative' key={file.name}>
						<MyImage
							imageUrl={files[0].preview}
							fill
							className='object-contain'
						/>
						<Button
							size={'icon'}
							variant={'destructive'}
							className='absolute top-2 right-3 z-20'
							onClick={() => removeImage(file.preview)}
						>
							<span className='sr-only'>delete image</span>
							<Trash2 className='h-4 w-4' />
						</Button>
					</div>
				))
			) : (
				<div
					{...getRootProps({
						className: 'h-full flex items-center justify-center cursor-pointer',
					})}
				>
					<input {...getInputProps()} />
					<p className='text-sm text-gray-500 text-center font-medium'>
						Drag 'n' drop some files here, or click to select files
					</p>
				</div>
			)}
		</div>
	)
}

export default ImageUpload
