'use client'

import Avatar from './avatar'

interface IGetUserProps {
	avatar: string
	fullName: string
}

const GetUser: React.FC<IGetUserProps> = ({ avatar, fullName }) => {
	return (
		<div className='flex items-center gap-x-3 mt-3'>
			<Avatar avatarUrl={avatar} />
			<div className='flex flex-col gap-y-2'>
				<h1 className='text-sm'>{fullName}</h1>
			</div>
		</div>
	)
}

export default GetUser
