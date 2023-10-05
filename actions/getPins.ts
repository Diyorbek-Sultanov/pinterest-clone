'use server'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

import { IPins } from '@/types/pins.types'

const getPins = async (): Promise<IPins[]> => {
	const supabase = createServerComponentClient({ cookies })

	const { data, error } = await supabase
		.from('pins')
		.select('*')
		.order('created_at', { ascending: false })

	if (error) {
		console.log(error.message)
	}

	return (data as any) || []
}

export { getPins }
