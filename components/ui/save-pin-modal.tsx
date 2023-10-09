'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { useModal } from '@/hooks/useModal'
import { useLoadImage } from '@/hooks/userLoadImage'
import { cn } from '@/lib/utils'

import { Button } from './button'
import Icon from './icon'

const SavePinModal: React.FC = () => {
	const { isOpen, type, onClose, pinData } = useModal()
	const imageUrl = useLoadImage(pinData) as string

	const isOpenModal = isOpen && type === 'savePin'

	useEffect(() => {
		if (isOpenModal) {
			setTimeout(() => {
				onClose()
			}, 4000)
		}
	}, [isOpenModal])

	return (
		<div
			className={cn(
				'dark:bg-zinc-700 bg-white shadow-md dark:shadow-none px-3 py-2 fixed left-[50%] translate-x-[-50%] max-w-[240px] w-full rounded-2xl transition-all duration-300',
				isOpenModal
					? 'bottom-5 select-auto pointer-events-auto scale-100 opacity-100 z-50'
					: 'bottom-[-100%] select-none pointer-events-none scale-75 opacity-60 z-0'
			)}
		>
			<Icon
				name='x'
				className='absolute top-3 right-3 cursor-pointer h-4 w-4'
				onClick={onClose}
			/>
			<div className='flex gap-x-3'>
				<div className='relative w-12 h-12 aspect-square rounded-2xl overflow-hidden'>
					<Image
						fill
						src={imageUrl ? imageUrl : '/images/eye.jpg'}
						alt='image'
						className='object-cover'
					/>
				</div>
				<div className='flex flex-col gap-y-1'>
					<span className='text-sm font-normal'>Saved</span>
					<Link
						className='hover:underline font-medium capitalize text-base'
						href={'/profil'}
					>
						profil
					</Link>
				</div>
				{/* <Button className='rounded-3xl font-semibold'>Cancel</Button> */}
			</div>
		</div>
	)
}

export default SavePinModal
