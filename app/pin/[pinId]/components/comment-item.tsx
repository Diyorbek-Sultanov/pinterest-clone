'use client'

import { useUser } from '@supabase/auth-helpers-react'

import GetUser from '@/components/get-user'
import { IComments } from '@/types/comment.types'

const CommentItem: React.FC<{ comment: IComments }> = ({ comment }) => {
	const user = useUser()

	return (
		<div className='flex flex-col gap-y-2'>
			<div className='flex items-center justify-between'>
				<GetUser
					avatar={user?.user_metadata.avatar_url}
					fullName={user?.user_metadata.full_name}
				/>
				<div className='text-xs'>
					{new Date(comment.created_at).toISOString()}
				</div>
			</div>
			<p className='text-sm font-normal pl-5'>{comment.comment_text}</p>
		</div>
	)
}

export default CommentItem
