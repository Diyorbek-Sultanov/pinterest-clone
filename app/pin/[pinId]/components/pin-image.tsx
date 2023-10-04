'use client'

import MyImage from '@/components/ui/image'
import { useLoadImage } from '@/hooks/userLoadImage'
import { IPins } from '@/types/pins.types'

const PinImage: React.FC<{ pin: IPins }> = ({ pin }) => {
	const imageUrl = useLoadImage(pin) as string

	return (
		<div className='relative h-full w-full'>
			<MyImage imageUrl={imageUrl} fill className='object-cover' />
		</div>
	)
}

export default PinImage
