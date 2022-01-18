import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { ExternalLinkIcon } from '@heroicons/react/outline'

const Container = dynamic(() => import('./Container'))

const Projects = () => {
	return (
		<section className='' id='projects'>
			<Container>
				<div className='flex flex-col items-center lg:flex-row'>
					{/* Image */}
					<div className='relative rounded-lg overflow-hidden min-w-full max-w-[770px] hover:opacity-75 cursor-pointer shadow-xl dark:shadow-lg'>
						<Link href='https://rayhansoe.github.io/moviesdb/'>
							<a target='_blank'>
								<Image
									src='/project1-preview.png'
									alt='Project Preview.'
									placeholder='blur'
									blurDataURL
									loading='eager'
									width='100%'
									height='69.8701298701%'
									layout='responsive'
									objectFit='cover'
									quality={100}
								/>
							</a>
						</Link>
					</div>
					<div className='flex flex-col py-4 gap-2 lg:flex-row'>
						<h4 className='font-averia'>Featured Project</h4>
						<Link href='https://rayhansoe.github.io/moviesdb/'>
							<a target='_blank'>
								<h1 className='text-2xl font-semibold hover:underline'>MoviesDB</h1>
							</a>
						</Link>
						<div className='desc'>
							<p>
								A Twitter Bot for GirlScript Foundation that automatically retweets, favourites the
								tweets and follows the users who tweet with hashtag #girlscript. Checkout my tech
								blog on how to create it HERE
							</p>
						</div>
						<ul className='flex gap-4 py-4 flex-wrap'>
							<li className='px-4 py-1 rounded-xl outline outline-2 outline-primary-color hover:outline-red-300 cursor-pointer'>
								HTML
							</li>
							<li className='px-4 py-1 rounded-xl outline outline-2 outline-primary-color hover:outline-red-300 cursor-pointer'>
								CSS
							</li>
							<li className='px-4 py-1 rounded-xl outline outline-2 outline-primary-color hover:outline-red-300 cursor-pointer'>
								Javascript
							</li>
							<li className='px-4 py-1 rounded-xl outline outline-2 outline-primary-color hover:outline-red-300 cursor-pointer'>
								React
							</li>
						</ul>
						<div className='flex gap-4'>
							<button>button1</button>
							<Link href='https://rayhansoe.github.io/moviesdb/'>
								<a target='_blank'>
									<ExternalLinkIcon className='w-7 h-7 hover:opacity-75' role='link' />
								</a>
							</Link>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Projects
