'use client'

import { Button } from '@/components/ui/button'

const ProfileActions: React.FC = () => {
	return (
		<div className='mt-5 flex w-full items-center gap-x-3 justify-center'>
			<Button className='rounded-3xl' variant={'outline'}>
				Share
			</Button>
			<Button className='rounded-3xl' variant={'outline'}>
				Change profile
			</Button>
		</div>
	)
}

export default ProfileActions
