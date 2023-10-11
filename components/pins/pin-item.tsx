'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useLoadImage } from '@/hooks/userLoadImage'
import { IPins } from '@/types/pins.types'

import SaveButton from '../save-button'
import { Button } from '../ui/button'
import Icon from '../ui/icon'
import MyImage from '../ui/image'

interface IPinProps {
	pin: IPins
}

const PinItem: React.FC<IPinProps> = ({ pin }) => {
	const imageUrl = useLoadImage(pin) as string
	const pathname = usePathname()

	const isProfilePage = pathname.startsWith('/profile')

	return (
		<div className='relative group'>
			<Link href={`/pin/${pin.id}`}>
				<div className='w-full overflow-hidden aspect-square mb-5 h-full cursor-zoom-in group relative'>
					<div className='absolute inset-0 bg-black/20 z-50 rounded-3xl opacity-0 transition-opacity group-hover:opacity-100' />
					<MyImage
						imageUrl={imageUrl}
						className='rounded-3xl aspect-square object-cover'
						fill
					/>
				</div>
			</Link>
			<div className='opacity-0 group-hover:opacity-100 absolute top-2 right-2 z-[55] transition-opacity'>
				<SaveButton pin={pin} />
			</div>
			{isProfilePage && (
				<div className='opacity-0 group-hover:opacity-100 absolute bottom-2 right-3 z-[55] transition-opacity'>
					<Button size={'icon'}>
						<span className='sr-only'>change pin</span>
						<Icon name='pencil-line' />
					</Button>
				</div>
			)}
		</div>
	)
}

export default PinItem
