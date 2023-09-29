import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

import Navbar from '@/components/layout/navbar/navbar'
import Sidebar from '@/components/layout/sidebar/sidebar'
import ModalProvider from '@/providers/modal-provider'
import { ThemeProvider } from '@/providers/theme-provider'

import '../styles/globals.css'

import SupabaseProvider from '@/providers/supabase-provider'

const mono = Open_Sans({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400', '500', '700'],
	style: ['normal', 'italic'],
	variable: '--font-mono',
})

export const metadata: Metadata = {
	title: 'Pinterest',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={mono.className}>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
					<SupabaseProvider>
						<ModalProvider />
						<div className='dark:bg-bgBodyDark bg-bgBody min-h-screen overflow-hidden'>
							<aside className='hidden md:flex md:fixed md:inset-y-0 z-20 md:w-72 h-full'>
								<Sidebar />
							</aside>
							<main className='md:pl-72 h-full'>
								<Navbar />
								{children}
							</main>
						</div>
					</SupabaseProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
