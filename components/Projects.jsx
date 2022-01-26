import Link from 'next/link'
import dynamic from 'next/dynamic'

import RafiSoe from '../public/rafisoe.webp'
import StoreGG from '../public/StoreGG.webp'
import MoviesDB from '../public/MoviesDB.webp'
import OldVersion from '../public/Old version.webp'
import JokesGenerator from '../public/Jokes Generator.webp'
import StarMatchGame from '../public/star match game.webp'

const Container = dynamic(() => import('./Container'))
const Project = dynamic(() => import('./Project'))

const Projects = () => {
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
		// {
		// 	id: 5,
		// 	title: 'Star Match Game',
		// 	desc: (
		// 		<p>
		// 			A Simple Web App that I made when I first learned reactjs. And I learned from this {''}
		// 			<Link href='https://www.pluralsight.com/courses/react-js-getting-started'>
		// 				<a className='text-primary-color hover:underline'>Pluralsight Course</a>
		// 			</Link>
		// 			.
		// 		</p>
		// 	),
		// 	techs: ['HTML'],
		// 	linkDemo: 'https://rayhansoe.github.io/Star-Match-Game/',
		// 	linkSource: 'https://github.com/rayhansoe/Star-Match-Game',
		// 	srcImg: StarMatchGame,
		// 	altImg: 'Star Match Game',
		// },
	]
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
