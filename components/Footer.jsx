import dynamic from 'next/dynamic'
import Link from 'next/link'

const Container = dynamic(() => import('./Container'))

const Footer = () => {
	return (
		<section className='py-6'>
			<Container>
				<footer className='flex flex-col items-center justify-center'>
					<h4 className='font-averia'>Made with ❤️ in Indonesia.</h4>
					<h4 className='font-averia'>
						Develop use{' '}
						<Link href='https://nextjs.org/'>
							<a target='_blank' className='text-primary-color hover:underline'>
								Next Js
							</a>
						</Link>
						,{' '}
						<Link href='tailwindcss.com'>
							<a target='_blank' className='text-primary-color hover:underline'>
								Tailwind CSS
							</a>
						</Link>{' '}
						and Hosted on{' '}
						<Link href='https://vercel.com/'>
							<a target='_blank' className='text-primary-color hover:underline'>
								Vercel
							</a>
						</Link>
					</h4>
				</footer>
			</Container>
		</section>
	)
}

export default Footer
