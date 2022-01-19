import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useTheme } from 'next-themes'

import { useEffect, useState } from 'react'

import { ExternalLinkIcon } from '@heroicons/react/outline'

import ProjectPreview from '../public/project1-preview.webp'

const Container = dynamic(() => import('./Container'))

const Projects = () => {
	const { systemTheme, theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

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
	return (
		<section className='py-10 lg:pb-26 2xl:max-w-[1440px] 2xl:mx-auto 2xl:w-full' id='projects'>
			<Container>
				<div className='flex flex-col gap-14'>
					{/* Project 1 */}
					<div className='flex flex-col items-center py-14 gap-4 rounded-lg sm:flex-row sm:justify-between'>
						{/* Image */}
						<div className='relative rounded-lg overflow-hidden min-w-full hover:opacity-75 cursor-pointer shadow-xl dark:shadow-lg sm:min-w-[40%] sm:order-1 lg:max-w-[50%]'>
							<Link href='https://rayhansoe.github.io/moviesdb/'>
								<a target='_blank'>
									<Image
										src={ProjectPreview}
										alt='Project Preview.'
										placeholder='blur'
										width='100%'
										height='69.8701298701%'
										layout='responsive'
										objectFit='cover'
										quality={100}
									/>
								</a>
							</Link>
						</div>

						{/* Text Section */}
						<div className='flex flex-col items-baseline gap-2  lg:max-w-[50%]'>
							<h4 className='font-averia'>Featured Project</h4>
							<Link href='https://rayhansoe.github.io/moviesdb/'>
								<a target='_blank'>
									<h1 className='text-2xl font-semibold hover:underline'>MoviesDB</h1>
								</a>
							</Link>
							<div className='desc'>
								<p>
									A Twitter Bot for GirlScript Foundation that automatically retweets, favourites
									the tweets and follows the users who tweet with hashtag #girlscript. Checkout my
									tech blog on how to create it HERE
								</p>
							</div>
							<ul className='flex gap-4 py-2 flex-wrap'>
								<li className=''>HTML</li>
								<li className=''>CSS</li>
								<li className=''>Javascript</li>
								<li className=''>React</li>
							</ul>
							{/* Source */}
							<div className='flex gap-4'>
								<Link href='https://github.com/rayhansoe/moviesdb'>
									<a target='_blank' className='hover:opacity-75'>
										{renderGitHubIcons()}
									</a>
								</Link>
								<Link href='https://rayhansoe.github.io/moviesdb/'>
									<a target='_blank'>
										<ExternalLinkIcon className='w-7 h-7 hover:opacity-75' role='link' />
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Projects
