import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const LocalIcon = ({ darkIcon, lightIcon }) => {
	const { systemTheme, theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	const renderIcons = () => {
		if (!mounted) return null

		const currentTheme = theme === 'system' ? systemTheme : theme

		// SET THEME DARK
		if (currentTheme === 'dark') {
			return <>{lightIcon}</>

			// SET THEME LIGHT
		} else {
			return <>{darkIcon}</>
		}
	}
	return <>{renderIcons()}</>
}

export default LocalIcon
