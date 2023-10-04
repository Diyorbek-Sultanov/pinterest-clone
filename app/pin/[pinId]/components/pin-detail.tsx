'use client'

import SaveButton from '@/components/save-button'
import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'
import { IPins } from '@/types/pins.types'

const PinDetailInfo: React.FC<{ pin: IPins }> = ({ pin }) => {
	return (
		<div className='flex-1 px-4 py-3'>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-x-3'>
					<Button
						size={'icon'}
						className='rounded-full hover:bg-zinc-300/40 dark:hover:bg-white/25'
						variant={'ghost'}
					>
						<Icon name='download' />
						<span className='sr-only'>download</span>
					</Button>
					<Button
						size={'icon'}
						className='rounded-full hover:bg-zinc-300/40 dark:hover:bg-white/25'
						variant={'ghost'}
					>
						<Icon name='link' strokeWidth={2} />
						<span className='sr-only'>copy</span>
					</Button>
				</div>
				<SaveButton className='text-base px-7' pinId={pin.id} />
			</div>
		</div>
	)
}

export default PinDetailInfo
