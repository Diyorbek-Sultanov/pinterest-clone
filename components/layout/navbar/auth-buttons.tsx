'use client'

import { Button } from '@/components/ui/button'
import { useModal } from '@/hooks/useModal'

const AuthButtons: React.FC = () => {
	const { onOpen } = useModal()

	return (
		<>
			<Button variant={'destructive'} onClick={onOpen}>
				Sign in
			</Button>
			<Button variant={'outline'} onClick={onOpen}>
				Sign up
			</Button>
		</>
	)
}

export default AuthButtons
