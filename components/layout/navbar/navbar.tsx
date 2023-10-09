'use client'

import MobileSidebar from '@/components/mobile-sidebar'
import { ThemeToggle } from '@/components/theme-toggle'
import { useUser } from '@/hooks/use-user'

import AuthButtons from './auth-buttons'
import ProtectButtons from './protect-buttons'
import SearchInput from './search-input'

const Navbar: React.FC = () => {
	const user = useUser()

	return (
		<header className='pt-10 px-8 w-full mb-8'>
			<MobileSidebar />
			<div className='flex items-center gap-x-3 mt-4'>
				<SearchInput />
				<div className='flex items-center gap-x-5'>
					{user ? <ProtectButtons /> : <AuthButtons />}
					<ThemeToggle />
				</div>
			</div>
		</header>
	)
}

export default Navbar
