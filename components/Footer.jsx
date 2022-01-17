import dynamic from 'next/dynamic'

const Container = dynamic(() => import('./Container'))

const Footer = () => {
	return (
		<section className='py-6'>
			<Container>
				<footer className='flex items-center justify-center'>
					<h4 className='font-averia'>Made with ❤️ in Indonesia.</h4>
				</footer>
			</Container>
		</section>
	)
}

export default Footer
