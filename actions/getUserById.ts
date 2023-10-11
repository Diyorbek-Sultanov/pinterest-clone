import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

import { ISupaUser } from '@/types/user.types'

const getUserById = async (userId: string): Promise<ISupaUser> => {
	const supabase = createServerComponentClient({ cookies })

	const { data, error } = await supabase
		.from('profiles')
		.select('*')
		.eq('id', userId)
		.single()

	if (error) console.log(error.message)

	return (data as any) || {}
}

export { getUserById }
