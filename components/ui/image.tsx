'use client'

import { useState } from 'react'
import Image from 'next/image'

import { cn } from '@/lib/utils'

interface IMyImageProps {
	imageUrl: string
	fill?: boolean
	className?: string
}

const MyImage: React.FC<IMyImageProps> = ({ imageUrl, fill, className }) => {
	const [isLoading, setIsloading] = useState(true)

	return (
		<>
			{fill ? (
				<Image
					src={imageUrl}
					alt='image'
					fill
					className={cn(
						'duration-700 ease-in-out',
						className,
						isLoading
							? 'grayscale blur-2xl scale-110'
							: 'grayscale-0 blur-0 scale-100'
					)}
					onLoadingComplete={() => setIsloading(false)}
				/>
			) : (
				<Image
					src={imageUrl}
					alt='image'
					width={0}
					height={0}
					className={cn(
						'w-full h-auto duration-700 ease-in-out',
						className,
						isLoading
							? 'grayscale blur-2xl scale-110'
							: 'grayscale-0 blur-0 scale-100'
					)}
					sizes='100vw'
					onLoadingComplete={() => setIsloading(false)}
				/>
			)}
		</>
	)
}

export default MyImage
