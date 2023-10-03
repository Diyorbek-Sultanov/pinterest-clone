'use client'

import { useLoadImage } from '@/hooks/userLoadImage'
import { IPins } from '@/types/pins.types'

import SaveButton from './save-button'
import MyImage from './ui/image'

interface IPinProps {
	pin: IPins
}

const Pin: React.FC<IPinProps> = ({ pin }) => {
	const imageUrl = useLoadImage(pin) as string

	return (
		<div className='w-full break-inside-avoid overflow-hidden aspect-square mb-5 h-full cursor-zoom-in group relative'>
			<MyImage
				imageUrl={imageUrl}
				className='rounded-3xl aspect-square object-cover max-w-full h-full'
				fill
			/>
			<div className='opacity-0 group-hover:opacity-100 absolute top-2 right-2 transition-opacity'>
				<SaveButton />
			</div>
		</div>
	)
}

export default Pin
