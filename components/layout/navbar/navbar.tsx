import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

import MobileSidebar from '@/components/mobile-sidebar'
import { ThemeToggle } from '@/components/theme-toggle'

import AuthButtons from './auth-buttons'
import ProtectButtons from './protect-buttons'
import SearchInput from './search-input'

const Navbar: React.FC = async () => {
	const supabase = createServerComponentClient({ cookies })
	const {
		data: { user },
	} = await supabase.auth.getUser()

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
