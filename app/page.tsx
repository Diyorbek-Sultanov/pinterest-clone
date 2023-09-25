import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Home',
	description: '',
}

export default function Page() {
	return <div className='mb-10 w-4 h-4 bg-purple-400 text-white'>hello</div>
}
