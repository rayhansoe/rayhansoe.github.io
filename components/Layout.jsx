import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({ children }) => {
	return (
		<div className='flex flex-col justify-between min-h-screen overflow-x-hidden'>
			<NavBar />
			{children}
			<Footer />
		</div>
	)
}

export default Layout
