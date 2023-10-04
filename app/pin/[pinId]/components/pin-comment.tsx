'use client'

import { useRef, type ElementRef } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { Send } from 'lucide-react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import Avatar from '@/components/avatar'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Textarea } from '@/components/ui/textarea'
import { useAutoSizeArea } from '@/hooks/use-auto-size-area'
import { IComments } from '@/types/comment.types'
import { commenSchema, TypecommenSchema } from '@/lib/validations/comment'

import CommentItem from './comment-item'

interface IPinCommentProps {
	pinId: string
	comments: IComments[]
}

const PinComment: React.FC<IPinCommentProps> = ({ pinId, comments }) => {
	const user = useUser()
	const supabaseClient = useSupabaseClient()

	const textAreaRef = useRef<ElementRef<'textarea'>>(null)
	const form = useForm<TypecommenSchema>({
		resolver: zodResolver(commenSchema),
		defaultValues: {
			comment: '',
		},
	})

	useAutoSizeArea(textAreaRef.current, form.watch('comment'))

	const { isLoading, isDirty } = form.formState

	const onSubmit = async (data: TypecommenSchema) => {
		try {
			const { error } = await supabaseClient.from('coments').insert({
				user_id: user?.id,
				pin_id: pinId,
				comment_text: data.comment,
			})

			if (error) {
				toast.error(error.message)
			}
			form.reset()
			toast.success('Add comment succes', {
				icon: '👏',
			})
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className='flex flex-col gap-y-4 mt-10 relative'>
			<h1 className='capitalize text-xl font-bold'>comments</h1>
			<ScrollArea className='w-full border rounded-sm h-60 px-5 py-3'>
				<div className='flex flex-col gap-y-5 w-full'>
					{comments.map(comment => (
						<CommentItem key={comment.id} comment={comment} />
					))}
				</div>
			</ScrollArea>
			<div className='absolute bottom-[-8rem] left-0 right-0 z-[65]'>
				<h2 className='text-left text-lg font-semibold mb-5'>10 comments</h2>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<div className='flex items-center gap-x-2 w-full'>
							<Avatar avatarUrl={user?.user_metadata.avatar_url} />
							<FormField
								control={form.control}
								name='comment'
								render={({ field }) => (
									<FormItem className='w-full'>
										<FormControl>
											<Textarea
												{...field}
												ref={textAreaRef}
												rows={1}
												className='appearance-none rounded-2xl overflow-hidden resize-none w-full focus-visible:ring-0 focus-visible:ring-offset-0 min-h-[40px]'
												placeholder='Add comment'
											/>
										</FormControl>
									</FormItem>
								)}
							/>
							<Button
								type='submit'
								disabled={isLoading || !isDirty}
								className='hover:bg-zinc-300/40 dark:hover:bg-white/25'
								size={'sm'}
								variant={'ghost'}
							>
								<Send className='h-5 w-5' />
								<span className='sr-only'>send comment</span>
							</Button>
						</div>
					</form>
				</Form>
			</div>
		</div>
	)
}

export default PinComment
