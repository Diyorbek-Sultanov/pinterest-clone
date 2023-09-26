import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'

import SearchInput from './search-input'

const Navbar: React.FC = () => {
	return (
		<header className='pt-10 px-8 w-full mb-8'>
			<div className='flex items-center gap-x-3'>
				<SearchInput />
				<div className='flex items-center gap-x-5'>
					<Button size={'icon'} variant={'outline'} className='shadow-md'>
						<Icon name='sliders' />
						<span className='sr-only'>open filters</span>
					</Button>
					<Button size={'icon'}>
						<Icon name='plus' />
						<span className='sr-only'>open add page</span>
					</Button>
				</div>
			</div>
		</header>
	)
}

export default Navbar
