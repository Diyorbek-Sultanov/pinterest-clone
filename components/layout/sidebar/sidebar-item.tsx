'use client'

import { usePathname, useRouter } from 'next/navigation'

import Icon from '@/components/ui/icon'
import { ISidebarData } from '@/types/sidebar.types'
import { cn } from '@/lib/utils'

const SidebarItem: React.FC<{ item: ISidebarData }> = ({ item }) => {
	const pathname = usePathname()
	const router = useRouter()

	const isActive =
		(pathname === '/' && item.route === '/') ||
		pathname === item.route ||
		pathname.startsWith(`${item.route}/`)

	return (
		<div
			className={cn(
				'flex items-center gap-x-2 font-normal text-base text-[#BCBCBC] capitalize cursor-pointer hover:bg-slate-300/30 dark:hover:bg-zinc-200/10',
				isActive &&
					'font-bold text-black bg-[#F0F0F0] dark:bg-transparent dark:text-white'
			)}
			onClick={() => router.push(item.route)}
		>
			<div className='flex items-center gap-x-3 px-10'>
				<Icon name={item.icon} size={20} />
				{item.label}
			</div>
			<div
				className={cn(
					'ml-auto opacity-0 h-[44px] transition-all border-2 border-black dark:border-white',
					isActive && 'opacity-100'
				)}
			/>
		</div>
	)
}

export default SidebarItem
