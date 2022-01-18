// import Head from 'next/head'
// import Image from 'next/image'
import dynamic from 'next/dynamic'

const Projects = dynamic(() => import('../components/Projects'))

export default function Home() {
	return (
		<>
			<Projects />
		</>
	)
}
