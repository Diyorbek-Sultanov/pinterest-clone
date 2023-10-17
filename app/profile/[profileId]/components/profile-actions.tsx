'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'

const ProfileActions: React.FC<{ profileId: string }> = ({ profileId }) => {
	const router = useRouter()

	return (
		<div className='mt-5 flex w-full items-center gap-x-3 justify-center'>
			<Button className='rounded-3xl' variant={'outline'}>
				Share
			</Button>
			<Button
				className='rounded-3xl'
				variant={'outline'}
				onClick={() => router.push(`/profile/${profileId}/settings`)}
			>
				Profile settings
			</Button>
		</div>
	)
}

export default ProfileActions
