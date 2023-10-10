import { getPins } from '@/actions/getPins'
import type { Metadata } from 'next'

import Pins from '@/components/pins/pins'

export const metadata: Metadata = {
	title: 'Home',
	description: '',
}

export const revalidate = 0

export default async function Page() {
	const pins = await getPins()

	return (
		<div className='h-full max-w-screen-2xl mx-auto rounded-md dark:bg-bgHomeDark'>
			<Pins pins={pins} />
		</div>
	)
}
