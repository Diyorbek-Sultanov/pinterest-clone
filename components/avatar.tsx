'use client'

import { cn } from '@/lib/utils'

import MyImage from './ui/image'

interface IAvatarProps {
	avatarUrl: string
	className?: string
}

const Avatar: React.FC<IAvatarProps> = ({ avatarUrl, className }) => {
	return (
		<div
			className={cn(
				'h-10 w-10 rounded-full relative overflow-hidden',
				className
			)}
		>
			<MyImage imageUrl={avatarUrl} fill className='object-cover' />
		</div>
	)
}

export default Avatar
