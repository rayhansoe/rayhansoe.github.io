// import Head from 'next/head'
// import Image from 'next/image'
import dynamic from 'next/dynamic'

const BGimg = dynamic(() => import('../components/BGimg'))

export default function Home() {
	return <BGimg />
}
