'use client'

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

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant={'ghost'} size={'icon'}>
					<span className='sr-only'>open profil menu</span>
					<Icon name='chevrons-up-down' />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent side='top' sideOffset={15}>
				<DropdownMenuItem>
					<GetUser
						avatar={user.userDetails?.avatar_url!}
						fullName={user?.userDetails?.full_name!}
					/>
				</DropdownMenuItem>
				<DropdownMenuLabel className='font-normal text-sm text-slate-500'>
					Additionally
				</DropdownMenuLabel>
				<DropdownMenuItem>Setting</DropdownMenuItem>
				<DropdownMenuItem>Logout</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default ProfilDropDown
