// import Head from 'next/head'
// import Image from 'next/image'
import dynamic from 'next/dynamic'

// const Projects = dynamic(() => import('../components/Projects'))
import Projects from '../components/Projects'

export default function Home() {
	return (
		<>
			<Projects />
		</>
	)
}
