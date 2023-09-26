import { ISidebarData } from '@/types/sidebar.types'

const sidebarData: ISidebarData[] = [
	{
		label: 'home',
		route: '/',
		icon: 'home',
	},
	{
		label: 'recent',
		route: '/recent',
		icon: 'clock-1',
	},
	{
		label: 'following',
		route: '/following',
		icon: 'users',
	},
]

export { sidebarData }
