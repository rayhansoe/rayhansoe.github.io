// import Head from 'next/head'
// import Image from 'next/image'
import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('../components/Hero'))

export default function Home() {
	return <Hero />
}
