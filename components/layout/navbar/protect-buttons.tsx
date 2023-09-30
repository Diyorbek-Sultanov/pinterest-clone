'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'

const ProtectButtons: React.FC = () => {
	const router = useRouter()

	return (
		<>
			<Button size={'icon'} variant={'outline'} className='shadow-md'>
				<Icon name='sliders' />
				<span className='sr-only'>open filters</span>
			</Button>
			<Button size={'icon'} onClick={() => router.push('/pin-create')}>
				<Icon name='plus' />
				<span className='sr-only'>open add page</span>
			</Button>
		</>
	)
}

export default ProtectButtons
