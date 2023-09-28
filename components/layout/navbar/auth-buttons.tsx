'use client'

import { Button } from '@/components/ui/button'
import { useModal } from '@/hooks/useModal'

const AuthButtons: React.FC = () => {
	const { onOpen } = useModal()

	return (
		<Button variant={'destructive'} onClick={onOpen}>
			Login
		</Button>
	)
}

export default AuthButtons
