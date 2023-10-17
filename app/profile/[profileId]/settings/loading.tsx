'use client'

import { Loader2 } from 'lucide-react'

const Loading: React.FC = () => {
	return (
		<div className='w-full h-full flex items-center justify-center'>
			<Loader2 className='animate-spin h-6 w-6 dark:text-white' />
		</div>
	)
}

export default Loading
