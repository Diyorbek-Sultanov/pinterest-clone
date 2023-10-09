'use client'

import { useEffect, useState } from 'react'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import toast from 'react-hot-toast'

import { useModal } from '@/hooks/useModal'
import { IPins } from '@/types/pins.types'
import { cn } from '@/lib/utils'

import { Button } from './ui/button'

type TypeSaveButtonProps = {
	pin?: IPins
	className?: string
}

const SaveButton: React.FC<TypeSaveButtonProps> = ({ pin, className }) => {
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
				.eq('pin_id', pin?.id)
				.single()

			if (!error && data) {
				setIsSaved(true)
			}
		}

		fetchSavedPins()
	}, [pin?.id, supabaseClient, user?.id])

	const onClick = async () => {
		if (!user) {
			return onOpen('auth')
		}

		if (isSaved) {
			const { error } = await supabaseClient
				.from('liked_pins')
				.delete()
				.eq('pin_id', pin?.id)
				.eq('user_id', user?.id)

			if (error) {
				toast.error(error.message)
			} else {
				setIsSaved(false)
			}
		} else {
			const { error } = await supabaseClient.from('liked_pins').insert({
				user_id: user?.id,
				pin_id: pin?.id,
			})

			if (error) {
				toast.error(error.message)
			} else {
				setIsSaved(true)
				onOpen('savePin', pin)
			}
		}
	}

	const text = isSaved ? 'Saved' : 'Save'

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
			{text}
		</Button>
	)
}

export default SaveButton
