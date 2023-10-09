'use client'

import { useEffect } from 'react'
import {
	useSessionContext,
	useSupabaseClient,
} from '@supabase/auth-helpers-react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { useModal } from '@/hooks/useModal'

import Modal from '../modal'

const AuthModal: React.FC = () => {
	const router = useRouter()
	const supabaseClient = useSupabaseClient()
	const { session } = useSessionContext()
	const { isOpen, onClose } = useModal()

	const theme = localStorage.getItem('theme') as string

	useEffect(() => {
		if (session) {
			router.refresh()
			onClose()
		}
	}, [session, router, onClose])

	const handleClose = (open: boolean) => {
		if (!open) {
			onClose()
		}
	}

	const header = (
		<div className='relative h-10 w-10'>
			<Image fill alt='image' src={'/images/pinterest-logo.svg'} />
		</div>
	)

	return (
		<Modal
			isOpen={isOpen}
			title='Welcome to Pinterest'
			description='Login to your account'
			onClose={handleClose}
			header={header}
		>
			<Auth
				theme={
					theme === 'system' ? 'dark' : theme === 'dark' ? 'dark' : 'light'
				}
				supabaseClient={supabaseClient}
				appearance={{
					theme: ThemeSupa,
				}}
				socialLayout='horizontal'
				providers={['github', 'discord', 'google']}
				redirectTo={`${window.location.origin}/auth/callback`}
			/>
		</Modal>
	)
}

export default AuthModal
