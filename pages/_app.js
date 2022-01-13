import '../styles/globals.scss'

import { ThemeProvider } from 'next-themes'
import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('../components/Layout'))
const BGimg = dynamic(() => import('../components/BGimg'))

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider enableSystem={true} attribute='class'>
			<BGimg />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	)
}

export default MyApp
