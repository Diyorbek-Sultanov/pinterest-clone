'use client'

import Image from 'next/image'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from './dialog'

interface IModalProps {
	isOpen: boolean
	onClose: (open: boolean) => void
	title: string
	children: React.ReactNode
	description: string
}

const Modal: React.FC<IModalProps> = ({
	isOpen,
	title,
	onClose,
	children,
	description,
}) => {
	return (
		<Dialog open={isOpen} defaultOpen={isOpen} onOpenChange={onClose}>
			<DialogContent className='w-screen h-screen md:h-auto'>
				<DialogHeader className='mb-6 flex flex-col items-center gap-y-3'>
					<div className='relative h-10 w-10'>
						<Image fill alt='image' src={'/images/pinterest-logo.svg'} />
					</div>
					<DialogTitle className='text-center text-xl'>{title}</DialogTitle>
				</DialogHeader>
				<div>{children}</div>
			</DialogContent>
		</Dialog>
	)
}

export default Modal
