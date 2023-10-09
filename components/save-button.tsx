'use client'

import { useEffect, useState } from 'react'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import toast from 'react-hot-toast'

import { useModal } from '@/hooks/useModal'
import { cn } from '@/lib/utils'

import { Button } from './ui/button'

type TypeSaveButtonProps = {
	pinId?: string
	className?: string
}

const SaveButton: React.FC<TypeSaveButtonProps> = ({ pinId, className }) => {
	const user = useUser()
	const supabaseClient = useSupabaseClient()
	const { onOpen } = useModal()

	const [isSaved, setIsSaved] = useState(false)

	useEffect(() => {
		if (!user?.id) return

		const fetchSavedPins = async () => {
			const { data, error } = await supabaseClient
				.from('liked_pins')
				.select('*')
				.eq('user_id', user?.id)
				.eq('pin_id', pinId)
				.single()

			if (!error && data) {
				setIsSaved(true)
			}
		}

		fetchSavedPins()
	}, [pinId, supabaseClient, user?.id])

	const onClick = async () => {
		if (!user) {
			return onOpen()
		}

		if (isSaved) {
			const { error } = await supabaseClient
				.from('liked_pins')
				.delete()
				.eq('pin_id', pinId)
				.eq('user_id', user?.id)

			if (error) {
				toast.error(error.message)
			} else {
				setIsSaved(false)
			}
		} else {
			const { error } = await supabaseClient.from('liked_pins').insert({
				pin_id: pinId,
				user_id: user?.id,
			})

			if (error) {
				toast.error(error.message)
			} else {
				setIsSaved(true)
				toast.success('Saved!')
			}
		}
	}

	return (
		<Button
			className={cn(
				'bg-rose-600 rounded-2xl dark:hover:bg-rose-500 transition-colors',
				className
			)}
			variant={'destructive'}
			size={'sm'}
			onClick={onClick}
		>
			Save
		</Button>
	)
}

export default SaveButton
