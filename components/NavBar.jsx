import { useTheme } from 'next-themes'
import dynamic from 'next/dynamic'
import { useCallback, useEffect, useState } from 'react'
import { MoonIcon, SunIcon, MenuIcon } from '@heroicons/react/solid'

const Container = dynamic(() => import('./Container'))

const NavBar = () => {
	const [isMobileNavDisplayed, setIsMobileNavDisplayed] = useState(() => false)
	const { systemTheme, theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	const mobileNavToggle = e => {
		e.stopPropagation()
		setIsMobileNavDisplayed(curr => !curr)
	}
	const stopBubbling = e => {
		e.stopPropagation()
	}

	const handleWindowResize = useCallback(() => {
		window.innerWidth > 1024 && setIsMobileNavDisplayed(false)
	}, [])

	useEffect(() => {
		window.addEventListener('resize', handleWindowResize)
		return () => window.addEventListener('resize', handleWindowResize)
	}, [handleWindowResize])

	useEffect(() => {
		setMounted(true)
	}, [])

	const isThemeLight = () => setTheme('light')
	const isThemeDark = () => setTheme('dark')

	const renderThemeChanger = () => {
		if (!mounted) return null

		const currentTheme = theme === 'system' ? systemTheme : theme

		// SET THEME LIGHT
		if (currentTheme === 'dark') {
			return <SunIcon className='w-7 h-7' role='button' onClick={isThemeLight} />

			// SET THEME DARK
		} else {
			return <MoonIcon className='w-7 h-7' role='button' onClick={isThemeDark} />
		}
	}

	return (
		<section className='navbar py-8'>
			<Container>
				<div className='nav flex justify-between items-center'>
					<h2 className='font-bold text-3xl'>DEVHOAM</h2>
					<div
						onClick={mobileNavToggle}
						className={`${
							isMobileNavDisplayed ? 'absolute' : 'hidden'
						} flex flex-col items-center justify-center w-full flex-1 text-center bg-dark-mode dark:bg-gray-900 bg-opacity-60 dark:bg-opacity-80 top-0 left-0 min-h-screen cursor-pointer text-white text-xl lg:block lg:relative lg:w-auto lg:min-h-full lg:flex-grow-0 lg:dark:bg-opacity-0 lg:bg-opacity-0 lg:text-lg`}>
						<ul
							className='relative flex flex-col items-center justify-center p-24 gap-8 bg-white text-black dark:text-white dark:bg-dark-mode rounded pointer-events-auto cursor-default z-20 lg:p-0 lg:flex-row lg:bg-opacity-0 lg:dark:bg-opacity-0 lg:gap-12'
							onClick={stopBubbling}>
							<li>
								<a href='#'>Resume</a>
							</li>
							<li>
								<a href='#'>Contact</a>
							</li>
							<li>
								<a href='#'>Project</a>
							</li>
						</ul>
					</div>
					<div className='menu-buttons flex gap-4'>
						{renderThemeChanger()}
						<MenuIcon className='w-7 h-7 lg:hidden' role='button' onClick={mobileNavToggle} />
					</div>
				</div>
			</Container>
		</section>
	)
}

export default NavBar
