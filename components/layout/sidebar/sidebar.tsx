'use client'

import Image from 'next/image'
import Link from 'next/link'

import GetUser from '@/components/get-user'
import { useUser } from '@/hooks/use-user'
import { sidebarData } from '@/constants/sidebar.data'

import ProfilDropDown from './profil-dropdown'
import SidebarItem from './sidebar-item'

const Sidebar: React.FC = () => {
	const user = useUser()

	return (
		<div className='h-full border-r w-full py-8 relative'>
			<Link href={'/'}>
				<div className='flex items-center gap-x-3 mb-8 px-10'>
					<div className='relative w-10 h-10'>
						<Image src={'/images/pinterest-logo.svg'} fill alt='logo' />
					</div>
					<h2 className='font-bold text-xl text-black dark:text-white capitalize'>
						pinterest
					</h2>
				</div>
			</Link>
			<div className='flex flex-col gap-y-6'>
				{sidebarData.map(item => (
					<SidebarItem key={item.label} item={item} />
				))}
			</div>
			<div className='absolute bottom-5 flex items-center gap-x-5 justify-between px-4'>
				<Link href={`/profile/${user.userDetails?.id}`}>
					<GetUser
						avatar={user.userDetails?.avatar_url!}
						fullName={user?.userDetails?.full_name!}
					/>
				</Link>
				<ProfilDropDown />
			</div>
		</div>
	)
}

export default Sidebar
