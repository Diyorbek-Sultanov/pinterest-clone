'use client'

import { useEffect, useState } from 'react'

import SignInModal from '@/components/ui/modals/signin-modal'

const ModalProvider: React.FC = () => {
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => setIsMounted(true), [])

	if (!isMounted) return null

	return (
		<>
			<SignInModal />
		</>
	)
}

export default ModalProvider
