import Image from 'next/image'

function BGImage() {
	return (
		<div className='fixed z-[-1] h-screen w-screen overflow-hidden'>
			<Image priority alt='BG' src='/BG-RAW.png' layout='fill' objectFit='cover' quality={100} />
		</div>
	)
}

export default BGImage
