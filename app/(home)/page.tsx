import { getPins } from '@/actions/getPins'
import type { Metadata } from 'next'

import Pin from '@/components/pin'

export const metadata: Metadata = {
	title: 'Home',
	description: '',
}

export const revalidate = 0

export default async function Page() {
	const pins = await getPins()

	return (
		<div className='h-full dark:bg-bgHomeDark mx-8'>
			<div className='px-3 py-5 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6 gap-5'>
				{pins.map(pin => (
					<Pin key={pin.id} pin={pin} />
				))}
			</div>
		</div>
	)
}
