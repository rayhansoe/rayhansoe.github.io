import Image from 'next/image'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Cat from '../public/Cat Full.webp'

import styles from '../styles/Hero.module.scss'

const Container = dynamic(() => import('./Container'))

// Hero Section / About Section
const Hero = () => {
	const router = useRouter()

	const isHired = (e) => {
		e.preventDefault()
		router.push('mailto:rayhan.rhssoe2@gmail.com')
	}

	return (
		<section className='py-6 lg:pb-26 2xl:max-w-[1536px] 2xl:mx-auto 2xl:w-full'>
			<Container>
				<div
					className='flex flex-col xs:text-center lg:flex-row lg:justify-between
																				lg:items-center lg:text-left lg:gap-16'>
					{/* Image */}
					<div
						className='relative px-4 w-[90%] max mx-auto sm:max-w-[70%]
																	md:max-w-[42.7%] md:px-0 lg:mx-0 lg:order-1
																					'>
						<Image
							src={Cat}
							alt='Cat Againts The World.'
							width={560}
							height={535}
							layout='responsive'
							priority
							objectFit='cover'
							quality={100}
						/>
					</div>

					{/* Text Section */}
					<div
						className='flex flex-col gap-4 pt-4 xs:items-center lg:order-0
																					lg:items-start lg:pt-0 lg:max-w-[50%]'>
						<p>
							<span className='font-averia text-primary-color'>01.</span> About
						</p>
						<h1 className='font-averia text-3xl sm:text-5xl'>
							Hi, I&apos;m{' '}
							<span className='relative'>
								Rayhansoe{''}
								<div
									className='absolute w-[100%] h-auto left-0 bottom-[.18rem] 
																								z-[-1] lg:bottom-[.25rem]'>
									<svg viewBox='0 0 368 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M4.90845 8.49447C47.4335 2.07559 90.7021 8.49447 133.519 
														8.49447C153.721 8.49447 173.201 4.33081 193.314 4.33081C212.322
														4.33081 230.326 8.26134 249.119 9.53539C261.704 10.3886 274.162 
														10.5763 286.765 10.5763C301.762 10.5763 316.759 10.5763 331.756 
														10.5763C338.329 10.5763 344.342 12.6581 350.955 12.6581C353.287 
														12.6581 355.62 12.6581 357.952 12.6581C361.593 12.6581 364.273 
														14.1963 362.983 11.6172'
											stroke='#E16259'
											strokeWidth='8'
											strokeLinecap='round'
										/>
									</svg>
								</div>
							</span>
							🐈
						</h1>
						<p className='max-w-[343px] sm:text-2xl sm:max-w-lg'>
							I&apos;m a front-end developer based in Bandung, Indonesia 🇮🇩 with high interest in
							the software industry.
						</p>
						<div className='flex flex-col gap-6 pt-2 lg:flex-row'>
							<button
								onClick={isHired}
								className='px-9 py-4 text-xl font-medium bg-primary-color bg-opacity-100
																										rounded-lg shadow-lg text-text-light 
																										
																										active:bg-opacity-90

																										focus:outline-none focus:underline focus:ring-4
																										focus:ring-primary-color focus:bg-opacity-75
																										
																										hover:underline hover:bg-opacity-80 hover:shadow-xl'>
								Hire Me!
							</button>
							<button className={styles.secButton}>
								<Link href='/Resume.pdf'>
									<a download target='_blank'>
										<span className={styles.text}>Resume</span>{' '}
										<span className={styles.icon}>📁</span>
										<span className={styles.icon2}>📂</span>
									</a>
								</Link>
							</button>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Hero
