import { getComments } from '@/actions/getComments'
import { getPinById } from '@/actions/getPinById'
import { getPins } from '@/actions/getPins'
import type { Metadata } from 'next'

import PinDetailInfo from './components/pin-detail'
import PinImage from './components/pin-image'

export const metadata: Metadata = {
	title: 'pin-detail',
	description: '',
}

export const revalidate = 0

export default async function PinDetail({
	params,
}: {
	params: { pinId: string }
}) {
	const pin = await getPinById(params.pinId)
	const comments = await getComments(pin.id)

	return (
		<div className='h-full dark:bg-bgHomeDark bg-white shadow-md overflow-hidden rounded-xl max-w-5xl mx-auto dark:shadow-none'>
			<div className='flex justify-between gap-x-3 h-[640px]'>
				<div className='flex-1 h-full'>
					<PinImage pin={pin} />
				</div>
				<PinDetailInfo pin={pin} comments={comments} />
			</div>
		</div>
	)
}
