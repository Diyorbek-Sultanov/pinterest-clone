'use client'

import { useEffect, useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

import Pins from '@/components/pins/pins'
import Spinner from '@/components/spinner'
import { TabsContent } from '@/components/ui/tabs'
import { IPins } from '@/types/pins.types'

const CreatedPins: React.FC<{ userId: string }> = ({ userId }) => {
	const supabaseClient = useSupabaseClient()
	const [pins, setPins] = useState<IPins[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)

	useEffect(() => {
		const fetchCreatedPins = async () => {
			try {
				setIsLoading(true)
				const { data, error } = await supabaseClient
					.from('pins')
					.select('*')
					.eq('user_id', userId)

				if (error) console.log(error.message)

				setPins((data as any) || [])
			} catch (error) {
				console.log(error)
			} finally {
				setIsLoading(false)
			}
		}

		fetchCreatedPins()
	}, [userId])

	return (
		<TabsContent value='created'>
			{isLoading ? <Spinner /> : <Pins pins={pins} />}
		</TabsContent>
	)
}

export default CreatedPins
