import { getUserById } from '@/actions/getUerById'
import type { Metadata } from 'next'
import Link from 'next/link'

import Avatar from '@/components/avatar'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

import CreatedPins from './components/create-pins'
import ProfileActions from './components/profile-actions'

export const metadata: Metadata = {
	title: 'Profile',
	robots: { index: false, follow: false },
}

export default async function Page({
	params,
}: {
	params: { profileId: string }
}) {
	const user = await getUserById(params.profileId)

	return (
		<div className='h-full'>
			<div className='max-w-sm mx-auto dark:bg-bgHomeDark rounded-sm'>
				<div className='flex flex-col py-2 items-center'>
					<Avatar avatarUrl={user.avatar_url} className='h-20 w-20' />
					<h1 className='mt-3 font-bold text-lg'>{user.full_name}</h1>
					<span className='text-sm font-thin text-slate-400'>
						{user.username ? user.username : 'username'}
					</span>
					<Link
						href={user.website ? user.website : ''}
						target='_blank'
						className='text-base font-medium mt-2 hover:underline cursor-pointer'
					>
						{user.website ? user.website : 'website'}
					</Link>
					<p className='w-full font-normal text-sm leading-6 px-3 mt-3 text-center'>
						{user.description
							? user.description
							: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat maxime veniam inventore, quia facilis illo, corrupti quod eum cupiditate sequi deserunt iste est, placeat hic natus! Quidem laudantium magni dolore.'}
					</p>
					<ProfileActions />
				</div>
			</div>
			<Tabs defaultValue='saved' className='w-full mt-10'>
				<TabsList className='flex items-center justify-center bg-transparent'>
					<TabsTrigger value='created'>Created</TabsTrigger>
					<TabsTrigger value='saved'>Saved</TabsTrigger>
				</TabsList>
				<CreatedPins userId={params.profileId} />
			</Tabs>
		</div>
	)
}
