'use client'

import GetUser from '@/components/get-user'
import { useUser } from '@/hooks/use-user'
import { IComments } from '@/types/comment.types'

const CommentItem: React.FC<{ comment: IComments }> = ({ comment }) => {
	const user = useUser()

	return (
		<div className='flex flex-col gap-y-2'>
			<div className='flex items-center justify-between'>
				<GetUser
					avatar={user?.user?.user_metadata.avatar_url}
					fullName={user?.user?.user_metadata.full_name as string}
				/>
				<span className='text-xs font-medium italic dark:text-gray-400 text-gray-500'>
					{new Date(comment.created_at).getUTCDay()} day ago
				</span>
			</div>
			<p className='text-sm break-words w-2/5 font-normal pl-4'>
				{comment.comment_text}
			</p>
		</div>
	)
}

export default CommentItem
