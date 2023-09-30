'use client'

import { Button } from './ui/button'

const SaveButton: React.FC<{ pinId?: string }> = ({ pinId }) => {
	return (
		<Button
			className='bg-rose-600 rounded-2xl dark:hover:bg-rose-500 transition-colors'
			variant={'destructive'}
			size={'sm'}
		>
			Save
		</Button>
	)
}

export default SaveButton
