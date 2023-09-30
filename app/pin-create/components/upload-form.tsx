'use client'

import ImageUpload from '@/app/pin-create/components/image-upload'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form'
import { TypeUploadSchema, uploadSchema } from '@/lib/validations/upload'

const UploadForm: React.FC = () => {
	const form = useForm<TypeUploadSchema>({
		resolver: zodResolver(uploadSchema),
		defaultValues: {
			title: '',
			description: '',
			image: undefined,
		},
	})

	return (
		<div className='px-8 py-5'>
			<Form {...form}>
				<div className='flex gap-x-5'>
					<FormField
						control={form.control}
						name='image'
						render={({ field }) => (
							<FormItem className='w-72 rounded-lg'>
								<FormControl>
									<ImageUpload onChange={field.onChange} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className='flex-1'>fdsfsdf</div>
				</div>
			</Form>
		</div>
	)
}

export default UploadForm
