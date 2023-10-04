import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

import { IComments } from '@/types/comment.types'

const getComments = async (pinId: string): Promise<IComments[]> => {
	const supabase = createServerComponentClient({ cookies })

	const { data, error } = await supabase
		.from('coments')
		.select('*')
		.eq('pin_id', pinId)
		.order('created_at', { ascending: false })

	if (error) {
		console.log(error.message)
	}

	return (data as any) || []
}

export { getComments }
