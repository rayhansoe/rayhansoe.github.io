import { useNProgress } from '@tanem/react-nprogress'
import { Bar } from './Bar'
import { BarContainer } from './BarContainer'

export const Progress = ({ isAnimating }) => {
	const { animationDuration, isFinished, progress } = useNProgress({
		isAnimating,
	})
	return (
		<BarContainer animationDuration={animationDuration} isFinished={isFinished}>
			<Bar animationDuration={animationDuration} progress={progress} />
		</BarContainer>
	)
}
