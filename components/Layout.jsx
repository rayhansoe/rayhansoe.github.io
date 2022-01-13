import dynamic from 'next/dynamic'

const NavBar = dynamic(() => import('./NavBar'))
const Footer = dynamic(() => import('./Footer'))

const Layout = ({ children }) => {
	return (
		<div className='flex flex-col justify-between min-h-screen'>
			<NavBar />
			{children}
			<Footer />
		</div>
	)
}

export default Layout
