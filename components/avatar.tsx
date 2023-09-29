'use client'

import MyImage from './ui/image'

interface IAvatarProps {
	avatarUrl: string
}

const Avatar: React.FC<IAvatarProps> = ({ avatarUrl }) => {
	return (
		<div className='h-10 w-10 rounded-full relative overflow-hidden'>
			<MyImage imageUrl={avatarUrl} fill className='object-cover' />
		</div>
	)
}

export default Avatar
