'use client'

import { useUser } from '@supabase/auth-helpers-react'

import Avatar from './avatar'
import MyImage from './ui/image'

const Pin: React.FC = () => {
	const user = useUser()

	return (
		<div className='w-full break-inside-avoid overflow-hidden mb-5 h-full'>
			<MyImage imageUrl={'/images/eye.jpg'} className='rounded-3xl' />
			<div className='flex items-center gap-x-3 mt-3'>
				<Avatar avatarUrl={user?.user_metadata.avatar_url} />
				<div className='flex flex-col gap-y-2'>
					<h1 className='text-sm'>{user?.user_metadata.full_name}</h1>
				</div>
			</div>
		</div>
	)
}

export default Pin
