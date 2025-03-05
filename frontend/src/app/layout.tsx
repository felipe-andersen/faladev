import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ReactQueryProvider } from '@/Provider/ReactQueryProvider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'FalaDev',
	description: 'Mentoria para desenvolvedores',
	icons: [{ url: '/static/imgs/faladev.ico' }],
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={cn(inter.className, 'flex flex-col items-center justify-center min-h-screen')}>
				<ReactQueryProvider>
					{children}
				</ReactQueryProvider>
			</body>
		</html>
	)
}
