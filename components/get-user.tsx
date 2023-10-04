'use client'

import { cn } from '@/lib/utils'

import Avatar from './avatar'

interface IGetUserProps {
	avatar: string
	fullName: string
	className?: string
}

const GetUser: React.FC<IGetUserProps> = ({ avatar, fullName, className }) => {
	return (
		<div className={cn('flex items-center gap-x-3 mt-3', className)}>
			<Avatar avatarUrl={avatar} />
			<div className='flex flex-col gap-y-2'>
				<h1 className='text-sm'>{fullName}</h1>
			</div>
		</div>
	)
}

export default GetUser
