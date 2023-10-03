'use client'

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { CheckSquare } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import uniqid from 'uniqid'

import ImageUpload from '@/app/pin-create/components/image-upload'
import GetUser from '@/components/get-user'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { TypeUploadSchema, uploadSchema } from '@/lib/validations/upload'

const UploadForm: React.FC = () => {
	const user = useUser()
	const supabaseClient = useSupabaseClient()
	const router = useRouter()
	const [isLoading, setIsloading] = useState(false)

	const form = useForm<TypeUploadSchema>({
		resolver: zodResolver(uploadSchema),
		defaultValues: {
			title: '',
			description: '',
			image: undefined,
		},
	})

	const onSubmit = async (data: TypeUploadSchema) => {
		try {
			setIsloading(true)

			const imageFile = data.image[0]

			if (!imageFile || !user) {
				toast.error('missing fields')
				return
			}

			const uniqId = uniqid()

			const { data: pinData, error: pinErr } = await supabaseClient.storage
				.from('pins')
				.upload(`pin-${data.title}-${uniqId}`, imageFile, {
					cacheControl: '2000',
				})

			if (pinErr) {
				setIsloading(false)
				toast.error('failed image upload')
			}

			const { error: uploadErr } = await supabaseClient.from('pins').insert({
				image_path: pinData?.path,
				user_id: user.id,
				title: data.title,
				description: data.description,
			})

			if (uploadErr) {
				setIsloading(false)
				toast.error(uploadErr.message)
			}

			router.refresh()
			setIsloading(false)
			toast.success('Pin created')
			form.reset()
		} catch (error) {
			console.log('upload error', error)
		}
	}

	return (
		<div className='px-8 py-5'>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className='flex items-center gap-x-5'>
						<FormField
							control={form.control}
							name='image'
							render={({ field }) => (
								<FormItem className='w-72 rounded-lg'>
									<FormControl>
										<ImageUpload
											disabled={isLoading}
											onChange={field.onChange}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className='flex-1 flex flex-col gap-y-8'>
							<FormField
								control={form.control}
								name='title'
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												{...field}
												placeholder='Add name'
												disabled={isLoading}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<GetUser
								avatar={user?.user_metadata.avatar_url}
								fullName={user?.user_metadata.full_name}
							/>
							<FormField
								control={form.control}
								name='description'
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Textarea
												rows={10}
												className='resize-none'
												{...field}
												placeholder='Add description'
												disabled={isLoading}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button
								className='w-fit capitalize font-medium'
								size={'lg'}
								disabled={isLoading}
							>
								<CheckSquare className='h-4 w-4 mr-2' />
								publish
							</Button>
						</div>
					</div>
				</form>
			</Form>
		</div>
	)
}

export default UploadForm
