// import Head from 'next/head'
// import Image from 'next/image'
import dynamic from 'next/dynamic'

const BGimg = dynamic(() => import('../components/BGimg'))
const NavBar = dynamic(() => import('../components/NavBar'))

export default function Home() {
	return (
		<>
			<BGimg />
			<NavBar />
		</>
	)
}
