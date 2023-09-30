import type { Metadata } from 'next'

import UploadForm from './components/upload-form'

export const metadata: Metadata = {
	title: 'Pin Create',
	robots: { follow: false, index: false },
}

export default function CreatePage() {
	return (
		<div className='max-w-5xl mx-auto dark:bg-bgHomeDark rounded-xl shadow-lg dark:shadow-none'>
			<UploadForm />
		</div>
	)
}
