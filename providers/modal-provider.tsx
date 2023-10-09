'use client'

import { useEffect, useState } from 'react'

import AuthModal from '@/components/ui/modals/auth-modal'
import SavePinModal from '@/components/ui/save-pin-modal'

const ModalProvider: React.FC = () => {
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => setIsMounted(true), [])

	if (!isMounted) return null

	return (
		<>
			<AuthModal />
			<SavePinModal />
		</>
	)
}

export default ModalProvider
