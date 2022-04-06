import dynamic from 'next/dynamic'

// const Hero = dynamic(() => import('../components/Hero'))
import Hero from '../components/Hero'

export default function Home() {
	return <Hero />
}
