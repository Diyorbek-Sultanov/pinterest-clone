'use client'

import { useUser } from '@supabase/auth-helpers-react'

import GetUser from '@/components/get-user'
import SaveButton from '@/components/save-button'
import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'
import { IComments } from '@/types/comment.types'
import { IPins } from '@/types/pins.types'

import PinComment from './pin-comment'

interface IPinDetailProps {
	pin: IPins
	comments: IComments[]
}

const PinDetailInfo: React.FC<IPinDetailProps> = ({ pin, comments }) => {
	const user = useUser()

	return (
		<div className='flex-1 px-4 py-3'>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-x-3'>
					<Button
						size={'icon'}
						className='rounded-full hover:bg-zinc-300/40 dark:hover:bg-white/25'
						variant={'ghost'}
					>
						<Icon name='download' />
						<span className='sr-only'>download</span>
					</Button>
					<Button
						size={'icon'}
						className='rounded-full hover:bg-zinc-300/40 dark:hover:bg-white/25'
						variant={'ghost'}
					>
						<Icon name='link' strokeWidth={2} />
						<span className='sr-only'>copy</span>
					</Button>
				</div>
				<SaveButton className='text-base px-7' pinId={pin.id} />
			</div>
			<h1 className='text-2xl font-bold mt-8'>{pin.title}</h1>
			<GetUser
				className='mt-5'
				avatar={user?.user_metadata.avatar_url}
				fullName={user?.user_metadata.full_name}
			/>
			<PinComment pinId={pin.id} comments={comments} />
		</div>
	)
}

export default PinDetailInfo