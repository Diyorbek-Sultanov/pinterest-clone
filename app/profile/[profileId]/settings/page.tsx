'use client'

import { useEffect, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useParams, useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import Spinner from '@/components/spinner'
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
import { ISupaUser } from '@/types/user.types'
import { profileSchema, TypeProfileSchema } from '@/lib/validations/profile'

export default function Page() {
	const params = useParams()
	const router = useRouter()
	const supabaseClient = useSupabaseClient()
	const [userData, setUserData] = useState<ISupaUser | null>(null)

	const form = useForm<TypeProfileSchema>({
		resolver: zodResolver(profileSchema),
		defaultValues: userData || {
			username: '',
			full_name: '',
			description: '',
			website: '',
		},
	})

	const isLoading = form.formState.isSubmitting

	useEffect(() => {
		const fetchUserById = async () => {
			try {
				const { data, error } = await supabaseClient
					.from('profiles')
					.select('*')
					.eq('id', params?.profileId)
					.single()

				if (error) console.log(error.message)

				setUserData(data)
			} catch (error) {
				console.log(error)
			}
		}

		fetchUserById()
	}, [params?.profileId])

	const onSubmit = async (data: TypeProfileSchema) => {
		try {
			const { error } = await supabaseClient.from('profiles').insert({
				id: params?.profileId,
				username: data.username,
				full_name: data.full_name,
				website: data.website,
				description: data.description,
			})

			if (error) toast.error(error.message)

			router.refresh()
			toast.success('Profile success updated!')
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className='md:max-w-xl mx-auto mt-10'>
			<h1 className='capitalize text-2xl font-bold mb-1'>settings</h1>
			<p className='text-muted-foreground mb-10'>
				change settings your profile
			</p>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
						<FormField
							control={form.control}
							name='username'
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											className='focus-visible:ring-0 focus-visible:ring-offset-0 h-auto'
											placeholder='username'
											{...field}
											disabled={isLoading}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='full_name'
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											className='focus-visible:ring-0 focus-visible:ring-offset-0 h-auto'
											placeholder='full_name'
											{...field}
											disabled={isLoading}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='description'
							render={({ field }) => (
								<FormItem className='col-span-2'>
									<FormControl>
										<Textarea
											className='focus-visible:ring-0 focus-visible:ring-offset-0 h-40 resize-none appearance-none'
											placeholder='description'
											{...field}
											disabled={isLoading}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='website'
							render={({ field }) => (
								<FormItem className='col-span-2'>
									<FormControl>
										<Input
											className='focus-visible:ring-0 focus-visible:ring-offset-0 h-auto'
											placeholder='https://example.com'
											{...field}
											disabled={isLoading}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className='mt-5'>
						<Button
							className='w-20 font-medium text-base capitalize'
							disabled={isLoading}
							type='submit'
						>
							{isLoading ? <Spinner /> : 'Save'}
						</Button>
					</div>
				</form>
			</Form>
		</div>
	)
}
