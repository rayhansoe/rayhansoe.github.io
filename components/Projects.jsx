import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useTheme } from 'next-themes'

import { useEffect, useState } from 'react'

import { ExternalLinkIcon } from '@heroicons/react/outline'

import RafiSoe from '../public/rafisoe.webp'
import StoreGG from '../public/StoreGG.webp'
import MoviesDB from '../public/MoviesDB.webp'
import OldVersion from '../public/Old version.webp'
import JokesGenerator from '../public/Jokes Generator.webp'
import StarMatchGame from '../public/star match game.webp'

const Container = dynamic(() => import('./Container'))
const Project = dynamic(() => import('./Project'))

const Projects = () => {
	const { systemTheme, theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)
	const data = [
		// Data 1
		{
			id: 0,
			title: 'StoreGG',
			desc: (
				<p>
					This landing page is from{' '}
					<Link href='https://buildwithangga.com/kelas/full-stack-javascript-developer-2021-website-top-up-voucher-game?thumbnail=pvksVt2Vrr.211&main_leads=searchresult'>
						<a className='text-primary-color hover:underline'>BWA Class</a>
					</Link>{' '}
					that I rebuilt for learning Responsive Layout without any frameworks. And for next up,
					I&apos;ll finish the class using my styles and changes.
				</p>
			),
			techs: ['HTML', 'CSS', 'Javascript', 'Responsive'],
			linkDemo: 'https://storegg-latihan.vercel.app/',
			linkSource: 'https://github.com/rayhansoe/STOREGG-LATIHAN',
			srcImg: StoreGG,
			altImg: 'StoreGG Design by BWA',
		},

		// Data 2
		{
			id: 1,
			title: 'Chuck Norris (Jokes Generator)',
			desc: (
				<p>
					Chuck Norris Jokes Generator that I built using public API (
					<Link href='https://api.chucknorris.io/'>
						<a className='text-primary-color hover:underline'>Chuck Norris API</a>
					</Link>
					). And for tech, I&apos;m using React, Material UI, Styled Component, and React Router.
				</p>
			),
			techs: ['React', 'Material UI', 'Styled Component', 'React Router'],
			linkDemo: 'https://chuck-norris-jokes-beta-three.vercel.app/',
			linkSource: 'https://github.com/rayhansoe/chuck-norris-jokes',
			srcImg: JokesGenerator,
			altImg: 'Chuck Norris (Jokes Generator).',
		},

		// Data 3
		{
			id: 2,
			title: 'MoviesDB',
			desc: (
				<p>
					This Movies Database is the first web app that I designed & built using React. I&apos;m
					using this public API (
					<Link href='https://www.themoviedb.org/'>
						<a className='text-primary-color hover:underline'>TMDB</a>
					</Link>
					). And for tech, I&apos;m using only React.
				</p>
			),
			techs: ['HTML', 'CSS', 'Javascript', 'React'],
			linkDemo: 'https://rayhansoe.github.io/moviesdb/',
			linkSource: 'https://github.com/rayhansoe/moviesdb',
			srcImg: MoviesDB,
			altImg: 'Movies Database',
		},

		// Data 4
		{
			id: 3,
			title: 'Rayhansoe&apos;s Portfolio (old version)',
			desc: (
				<p>
					The First Web Portfolio that I Designed by myself. And this is the old version using HTML,
					SCSS, and Javascript. And for the new version, you can check it{' '}
					<Link href='https://rayhansoe.vercel.app/'>
						<a className='text-primary-color hover:underline'>HERE</a>
					</Link>
					.
				</p>
			),
			techs: ['HTML', 'CSS', 'Javascript'],
			linkDemo: 'https://rayhansoe.github.io/',
			linkSource: 'https://github.com/rayhansoe/rayhansoe.github.io/tree/master',
			srcImg: OldVersion,
			altImg: `Rayhansoe's Portfolio`,
		},

		// Data 5
		{
			id: 4,
			title: 'Rafisoe&apos;s Portfolio',
			desc: (
				<p>
					Web Portfolio that I built for My Brother. And this is the first time I&lsquo;m using
					TailwindCSS with Nextjs and AOS. And for now, this is only a plain Home Page. And I
					promise I&apos;ll complete all pages and sections.
				</p>
			),
			techs: ['Nextjs', 'React', 'TailwindCSS', 'AOS'],
			linkDemo: 'https://rafisoe.vercel.app/',
			linkSource: 'https://github.com/rayhansoe/rafisoe',
			srcImg: RafiSoe,
			altImg: `Rafisoe's Portfolio`,
		},

		// Data 6
		{
			id: 5,
			title: 'Star Match Game',
			desc: (
				<p>
					A Simple Web App that I made when I first learned reactjs. And I learned from this {''}
					<Link href='https://www.pluralsight.com/courses/react-js-getting-started'>
						<a className='text-primary-color hover:underline'>Pluralsight Course</a>
					</Link>
					.
				</p>
			),
			techs: ['HTML'],
			linkDemo: 'https://rayhansoe.github.io/Star-Match-Game/',
			linkSource: 'https://github.com/rayhansoe/Star-Match-Game',
			srcImg: StarMatchGame,
			altImg: 'Star Match Game',
		},
	]

	useEffect(() => {
		setMounted(true)
	}, [])

	const renderGitHubIcons = () => {
		if (!mounted) return null

		const currentTheme = theme === 'system' ? systemTheme : theme

		// SET THEME LIGHT
		if (currentTheme === 'dark') {
			return (
				<svg
					width='29'
					height='28'
					viewBox='0 0 29 28'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M14.5 0C6.48875 0 0 6.42347 0 14.3541C0 20.7058 4.15063 26.0707 9.91438 27.9726C10.6394 28.0982 10.9113 27.6676 10.9113 27.2908C10.9113 26.9498 10.8931 25.8195 10.8931 24.6173C7.25 25.2812 6.3075 23.7381 6.0175 22.9307C5.85438 22.518 5.1475 21.2441 4.53125 20.9032C4.02375 20.634 3.29875 19.9702 4.51312 19.9522C5.655 19.9343 6.47062 20.9929 6.7425 21.4235C8.0475 23.5946 10.1319 22.9845 10.9656 22.6077C11.0925 21.6747 11.4731 21.0467 11.89 20.6879C8.66375 20.329 5.2925 19.091 5.2925 13.6005C5.2925 12.0395 5.85438 10.7476 6.77875 9.74285C6.63375 9.384 6.12625 7.9127 6.92375 5.93901C6.92375 5.93901 8.13812 5.56222 10.9113 7.41031C12.0712 7.08734 13.3038 6.92586 14.5363 6.92586C15.7688 6.92586 17.0012 7.08734 18.1613 7.41031C20.9344 5.54428 22.1488 5.93901 22.1488 5.93901C22.9463 7.9127 22.4388 9.384 22.2938 9.74285C23.2181 10.7476 23.78 12.0216 23.78 13.6005C23.78 19.1089 20.3906 20.329 17.1644 20.6879C17.69 21.1364 18.1431 21.9977 18.1431 23.3434C18.1431 25.2632 18.125 26.8063 18.125 27.2908C18.125 27.6676 18.3969 28.1161 19.1219 27.9726C22.0003 27.0105 24.5016 25.1791 26.2736 22.7362C28.0456 20.2932 28.9991 17.3616 29 14.3541C29 6.42347 22.5113 0 14.5 0Z'
						fill='white'
					/>
				</svg>
			)

			// SET THEME DARK
		} else {
			return (
				<svg
					width='29'
					height='28'
					viewBox='0 0 29 28'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M14.5 0C6.48875 0 0 6.42347 0 14.3541C0 20.7058 4.15063 26.0707 9.91438 27.9726C10.6394 28.0982 10.9113 27.6676 10.9113 27.2908C10.9113 26.9498 10.8931 25.8195 10.8931 24.6173C7.25 25.2812 6.3075 23.7381 6.0175 22.9307C5.85438 22.518 5.1475 21.2441 4.53125 20.9032C4.02375 20.634 3.29875 19.9702 4.51313 19.9522C5.655 19.9343 6.47063 20.9929 6.7425 21.4235C8.0475 23.5946 10.1319 22.9845 10.9656 22.6077C11.0925 21.6747 11.4731 21.0467 11.89 20.6879C8.66375 20.329 5.2925 19.091 5.2925 13.6005C5.2925 12.0395 5.85438 10.7476 6.77875 9.74285C6.63375 9.384 6.12625 7.9127 6.92375 5.93901C6.92375 5.93901 8.13812 5.56222 10.9113 7.41031C12.0713 7.08734 13.3038 6.92586 14.5363 6.92586C15.7688 6.92586 17.0013 7.08734 18.1613 7.41031C20.9344 5.54428 22.1488 5.93901 22.1488 5.93901C22.9463 7.9127 22.4388 9.384 22.2938 9.74285C23.2181 10.7476 23.78 12.0216 23.78 13.6005C23.78 19.1089 20.3906 20.329 17.1644 20.6879C17.69 21.1364 18.1431 21.9977 18.1431 23.3434C18.1431 25.2632 18.125 26.8063 18.125 27.2908C18.125 27.6676 18.3969 28.1161 19.1219 27.9726C22.0003 27.0105 24.5016 25.1791 26.2736 22.7362C28.0456 20.2932 28.9991 17.3616 29 14.3541C29 6.42347 22.5113 0 14.5 0Z'
						fill='black'
					/>
				</svg>
			)
		}
	}

	const renderProjects = () => {
		return data.map(p => <Project {...p} key={p.id} />)
	}

	return (
		<section className='py-10 lg:pb-26 2xl:max-w-[1536px] 2xl:mx-auto 2xl:w-full'>
			<Container>
				<div className='flex flex-col gap-14'>{renderProjects()}</div>
			</Container>
		</section>
	)
}

export default Projects
