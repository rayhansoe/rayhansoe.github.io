import '../styles/globals.scss'

import Head from 'next/head'
import { useState, useEffect } from 'react'
import { ThemeProvider } from 'next-themes'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import { Progress } from '../components/Progress'

function MyApp({ Component, pageProps }) {
	const [isAnimating, setIsAnimating] = useState(false)
	const router = useRouter()

	useEffect(() => {
		const handleStart = () => {
			setIsAnimating(true)
		}

		const handleStop = () => {
			setIsAnimating(false)
		}

		router.events.on('routeChangeStart', handleStart)
		router.events.on('routeChangeComplete', handleStop)
		router.events.on('routeChangeError', handleStop)

		return () => {
			router.events.off('routeChangeStart', handleStart)
			router.events.off('routeChangeComplete', handleStop)
			router.events.off('routeChangeError', handleStop)
		}
	}, [router])

	return (
		<>
			<Head>
				<title>Rayhan Soe | Front End Developer</title>
			</Head>
			<ThemeProvider enableSystem={true} attribute='class'>
				<Layout>
					<Progress isAnimating={isAnimating} />
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</>
	)
}

export default MyApp
