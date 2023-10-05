import { Suspense } from 'react'
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
		<div className='h-full max-w-screen-2xl mx-auto rounded-md dark:bg-bgHomeDark'>
			<div className='px-3 py-5 grid grid-cols-pinterestLayout auto-rows-pinterestLayout grid-flow-dense gap-5'>
				{pins.map(pin => (
					<Pin key={pin.id} pin={pin} />
				))}
			</div>
		</div>
	)
}
