import type { Metadata } from 'next'

import Pin from '@/components/pin'

export const metadata: Metadata = {
	title: 'Home',
	description: '',
}

export default function Page() {
	return (
		<div className='h-full dark:bg-bgHomeDark mx-8'>
			<div className='px-3 py-5 columns-6 gap-5'>
				<Pin />
			</div>
		</div>
	)
}
