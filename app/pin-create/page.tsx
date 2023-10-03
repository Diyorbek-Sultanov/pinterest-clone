import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import UploadForm from './components/upload-form'

export const metadata: Metadata = {
	title: 'Pin Create',
	robots: { follow: false, index: false },
}

export default async function CreatePage() {
	const supabase = createServerComponentClient({ cookies })
	const {
		data: { user },
	} = await supabase.auth.getUser()

	if (!user?.id) {
		redirect('/')
	}

	return (
		<div className='max-w-5xl mx-auto dark:bg-bgHomeDark rounded-xl shadow-lg dark:shadow-none'>
			<UploadForm />
		</div>
	)
}
