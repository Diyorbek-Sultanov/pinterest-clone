'use client'

import { cn } from '@/lib/utils'

import { Button } from './ui/button'

type TypeSaveButtonProps = {
	pinId?: string
	className?: string
}

const SaveButton: React.FC<TypeSaveButtonProps> = ({ pinId, className }) => {
	return (
		<Button
			className={cn(
				'bg-rose-600 rounded-2xl dark:hover:bg-rose-500 transition-colors',
				className
			)}
			variant={'destructive'}
			size={'sm'}
		>
			Save
		</Button>
	)
}

export default SaveButton
