'use client'

import Image from 'next/image'
import Link from 'next/link'

import { sidebarData } from '@/constants/sidebar.data'

import SidebarItem from './sidebar-item'

const Sidebar: React.FC = () => {
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
		</div>
	)
}

export default Sidebar
