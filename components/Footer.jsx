import dynamic from 'next/dynamic'

const Container = dynamic(() => import('./Container'))

const Footer = () => {
	return (
		<section className='pt-14'>
			<Container>
				<footer className='absolute flex items-center justify-center bottom-4 inset-x-0'>
					<h4 className='font-averia'>Made with ❤️ in Indonesia.</h4>
				</footer>
			</Container>
		</section>
	)
}

export default Footer
