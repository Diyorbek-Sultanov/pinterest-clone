'use client'

import { Toaster } from 'react-hot-toast'

const ToasterProvider: React.FC = () => {
	return (
		<Toaster
			position='top-right'
			toastOptions={{ className: 'dark:bg-bgHomeDark dark:text-white' }}
		/>
	)
}

export default ToasterProvider
