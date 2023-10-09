'use client'

import Image from 'next/image'

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from './dialog'

interface IModalProps {
	isOpen: boolean
	onClose: (open: boolean) => void
	title: string
	children: React.ReactNode
	description: string
	header: JSX.Element
}

const Modal: React.FC<IModalProps> = ({
	isOpen,
	title,
	onClose,
	children,
	description,
	header,
}) => {
	return (
		<Dialog open={isOpen} defaultOpen={isOpen} onOpenChange={onClose}>
			<DialogContent className='w-screen h-screen md:h-auto'>
				<DialogHeader className='mb-6 flex flex-col items-center gap-y-3'>
					{header}
					<DialogTitle className='text-center text-xl'>{title}</DialogTitle>
					<DialogDescription className='text-xs'>
						{description}
					</DialogDescription>
				</DialogHeader>
				<div>{children}</div>
			</DialogContent>
		</Dialog>
	)
}

export default Modal
