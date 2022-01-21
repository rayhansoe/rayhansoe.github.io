import '../styles/globals.scss'

import { ThemeProvider } from 'next-themes'
import dynamic from 'next/dynamic'
import Head from 'next/head'

const Layout = dynamic(() => import('../components/Layout'))
const BGimg = dynamic(() => import('../components/BGimg'))

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Rayhan Soe | Front End Developer</title>
			</Head>
			<ThemeProvider enableSystem={true} attribute='class'>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</>
	)
}

export default MyApp
