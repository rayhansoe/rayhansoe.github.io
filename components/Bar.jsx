export const Bar = ({ animationDuration, progress }) => {
	return (
		<div
			className='fixed left-0 top-0 z-50 h-1 w-full bg-primary-color'
			style={{
				marginLeft: `${(-1 + progress) * 100}%`,
				transition: `margin-left ${animationDuration}ms linear`,
			}}></div>
	)
}
