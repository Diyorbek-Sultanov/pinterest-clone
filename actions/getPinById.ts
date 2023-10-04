import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

import { IPins } from '@/types/pins.types'

const getPinById = async (pinId: string): Promise<IPins> => {
	const supabase = createServerComponentClient({ cookies })

	const { data, error } = await supabase
		.from('pins')
		.select('*')
		.eq('id', pinId)
		.single()

	if (error) {
		console.log(error.message)
	}

	return data as any
}

export { getPinById }
