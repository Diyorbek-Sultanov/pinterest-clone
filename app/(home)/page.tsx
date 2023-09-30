import type { Metadata } from 'next'

import Pin from '@/components/pin'

export const metadata: Metadata = {
	title: 'Home',
	description: '',
}

export default function Page() {
	return (
		<div className='h-full dark:bg-bgHomeDark mx-8'>
			<div className='px-3 py-5 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6 gap-5'>
				<Pin />
				<Pin />
			</div>
		</div>
	)
}
