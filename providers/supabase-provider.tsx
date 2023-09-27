'use client'

import { FC, PropsWithChildren, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'

import { Database } from '@/types/supabase.types'

const SupabaseProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [supabaseClient] = useState(createClientComponentClient<Database>())

	return (
		<SessionContextProvider supabaseClient={supabaseClient}>
			{children}
		</SessionContextProvider>
	)
}

export default SupabaseProvider
