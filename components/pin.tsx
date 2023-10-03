'use client'

import { useUser } from '@supabase/auth-helpers-react'

import Avatar from './avatar'
import GetUser from './get-user'
import SaveButton from './save-button'
import MyImage from './ui/image'

const Pin: React.FC = () => {
	const user = useUser()

	return (
		<div className='w-full break-inside-avoid overflow-hidden mb-5 h-full cursor-zoom-in group relative'>
			<MyImage imageUrl={'/images/eye.jpg'} className='rounded-3xl' />
			<GetUser
				avatar={user?.user_metadata.avatar_url}
				fullName={user?.user_metadata.full_name}
			/>
			<div className='opacity-0 group-hover:opacity-100 absolute top-2 right-2 transition-opacity'>
				<SaveButton />G
			</div>
		</div>
	)
}

export default Pin
