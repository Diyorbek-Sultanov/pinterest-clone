'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

import GetUser from '@/components/get-user'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Icon from '@/components/ui/icon'
import { useUser } from '@/hooks/use-user'

const ProfilDropDown: React.FC = () => {
	const user = useUser()
	const router = useRouter()
	const supabase = createClientComponentClient()

	const logout = async () => {
		const { error } = await supabase.auth.signOut()

		console.log(error)
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant={'ghost'} size={'icon'}>
					<span className='sr-only'>open profil menu</span>
					<Icon name='chevrons-up-down' />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent side='top' sideOffset={15}>
				<DropdownMenuItem
					onClick={() => router.push(`/profile/${user.userDetails?.id}`)}
				>
					<GetUser
						avatar={user.userDetails?.avatar_url!}
						fullName={user?.userDetails?.full_name!}
					/>
				</DropdownMenuItem>
				<DropdownMenuLabel className='font-normal text-sm text-slate-500'>
					Additionally
				</DropdownMenuLabel>
				<DropdownMenuItem
					onClick={() =>
						router.push(`/profile/${user.userDetails?.id}/settings`)
					}
				>
					Setting
				</DropdownMenuItem>
				<DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default ProfilDropDown
