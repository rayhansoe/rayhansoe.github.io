import { useTheme } from 'next-themes'
import Image from 'next/image'

function BGImage() {
	const { systemTheme, theme, setTheme } = useTheme()

	return (
		<>
			{/* DARK */}
			<div className='fixed z-[-1] h-screen w-screen overflow-hidden display dark:'>
				<Image
					priority
					alt='BG'
					src='/BG-RAW (2).webp'
					placeholder='blur'
					blurDataURL
					layout='fill'
					objectFit='cover'
					quality={100}
				/>
			</div>

			{/* Light */}
			<div className='fixed z-[-1] h-screen w-screen overflow-hidden dark:z-[-999]'>
				<Image
					priority
					alt='BG'
					src='/BG-LIGHT-RAW (1).webp'
					placeholder='blur'
					blurDataURL
					layout='fill'
					objectFit='cover'
					quality={100}
				/>
			</div>
		</>
	)
}

export default BGImage
