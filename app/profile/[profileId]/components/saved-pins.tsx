'use client'

import { useEffect, useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

import Pins from '@/components/pins/pins'
import Spinner from '@/components/spinner'
import { TabsContent } from '@/components/ui/tabs'
import { IPins } from '@/types/pins.types'

const SavedPins: React.FC<{ userId: string }> = ({ userId }) => {
	const supabaseClient = useSupabaseClient()
	const [pins, setPins] = useState<IPins[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)

	useEffect(() => {
		const fetchLikedPins = async () => {
			try {
				setIsLoading(true)
				const { data, error } = await supabaseClient
					.from('liked_pins')
					.select('*, pins(*)')
					.eq('user_id', userId)
					.order('created_at', { ascending: false })

				if (error) console.log(error.message)

				setPins(data?.map(item => item.pins as any) || [])
			} catch (error) {
				console.log(error)
			} finally {
				setIsLoading(false)
			}
		}

		fetchLikedPins()
	}, [userId])

	return (
		<TabsContent value='saved'>
			{isLoading ? (
				<Spinner />
			) : pins.length ? (
				<Pins pins={pins} />
			) : (
				<div className='mt-6 text-center'>Not found</div>
			)}
		</TabsContent>
	)
}

export default SavedPins
