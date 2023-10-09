'use client'

import {
	createContext,
	useEffect,
	useMemo,
	useState,
	type FC,
	type PropsWithChildren,
} from 'react'
import { User } from '@supabase/auth-helpers-nextjs'
import {
	useSessionContext,
	useUser as useSupaUser,
} from '@supabase/auth-helpers-react'

import { ISupaUser } from '@/types/user.types'

type TUserContext = {
	accessToken: string | null
	user: User | null
	userDetails: ISupaUser | null
	isLoading: boolean
}

export const UserContext = createContext<TUserContext | undefined>(undefined)

export const UserContextProvider: FC<PropsWithChildren<unknown>> = ({
	children,
}) => {
	const {
		session,
		isLoading: isUserLoading,
		supabaseClient: supabase,
	} = useSessionContext()
	const user = useSupaUser()
	const accessToken = session?.access_token ?? null
	const [isLoadingData, setIsLoadingData] = useState(false)
	const [userDetails, setuserDetails] = useState<ISupaUser | null>(null)

	const getUserDetails = () => supabase.from('profiles').select('*').single()

	useEffect(() => {
		if (user && !isLoadingData && !userDetails) {
			setIsLoadingData(true)

			Promise.allSettled([getUserDetails()]).then(result => {
				const userDetailsPromise = result[0]

				if (userDetailsPromise.status === 'fulfilled') {
					setuserDetails(userDetailsPromise.value.data as ISupaUser)
				}

				setIsLoadingData(false)
			})
		} else if (!user && !isUserLoading && !isLoadingData) {
			setuserDetails(null)
		}
	}, [user, isUserLoading])

	const value = useMemo(
		() => ({
			accessToken,
			user,
			userDetails,
			isLoading: isUserLoading || isLoadingData,
		}),
		[accessToken, isLoadingData, isUserLoading, user, userDetails]
	)

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
