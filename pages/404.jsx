import Image from 'next/image'
import Error from '../public/404 Error with a cute animal-bro.webp'
export default function Custom404() {
	return (
		<div className='relative w-full self-center justify-self-center md:w-2/3 lg:w-1/2 2xl:w-2/5'>
			<Image
				src={Error}
				alt='Error'
				placeholder='blur'
				width='2000'
				height='2000'
				layout='responsive'
				quality={100}
			/>
		</div>
	)
}
