import { Menu } from 'lucide-react'

import Sidebar from './layout/sidebar/sidebar'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

const MobileSidebar: React.FC = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button className='md:hidden' size={'icon'} variant={'ghost'}>
					<Menu />
					<span className='sr-only'>open sidebar</span>
				</Button>
			</SheetTrigger>
			<SheetContent className='p-0' side={'left'}>
				<Sidebar />
			</SheetContent>
		</Sheet>
	)
}

export default MobileSidebar
