'use client'

import { IPins } from '@/types/pins.types'

import PinItem from './pin-item'

const Pins: React.FC<{ pins: IPins[] }> = ({ pins }) => {
	return (
		<div className='px-3 py-5 grid grid-cols-pinterestLayout auto-rows-pinterestLayout grid-flow-dense gap-5'>
			{pins.map(pin => (
				<PinItem key={pin.id} pin={pin} />
			))}
		</div>
	)
}

export default Pins
