import Image from 'next/image'
import BGDark from '../public/BG-RAW (2).webp'
import BGLight from '../public/BG-LIGHT-RAW (1).webp'

function BGImage() {
	return (
		<>
			{/* DARK */}
			<div className='hidden fixed bg-dark-mode z-[-1] h-screen w-screen overflow-hidden dark:block'>
				<Image
					priority
					alt='BG'
					src={BGDark}
					placeholder='blur'
					layout='fill'
					objectFit='cover'
					quality={100}
					draggable='false'
				/>
			</div>

			{/* Light */}
			<div className='fixed z-[-1] bg-text-light h-screen w-screen overflow-hidden dark:hidden'>
				<Image
					priority
					draggable='false'
					alt='BG'
					src={BGLight}
					placeholder='blur'
					layout='fill'
					objectFit='cover'
					quality={100}
				/>
			</div>
		</>
	)
}

export default BGImage
