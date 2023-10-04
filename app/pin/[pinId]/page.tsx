import { getPinById } from '@/actions/getPinById'
import type { Metadata } from 'next'

import PinDetailInfo from './components/pin-detail'
import PinImage from './components/pin-image'

export const metadata: Metadata = {
	title: 'pin-detail',
	description: '',
}

export default async function PinDetail({
	params,
}: {
	params: { pinId: string }
}) {
	const pin = await getPinById(params.pinId)

	return (
		<div className='h-full dark:bg-bgHomeDark shadow-md overflow-hidden rounded-xl max-w-5xl mx-auto dark:shadow-none'>
			<div className='flex justify-between gap-x-3 h-[600px]'>
				<div className='flex-1 h-full'>
					<PinImage pin={pin} />
				</div>
				<PinDetailInfo pin={pin} />
			</div>
		</div>
	)
}
