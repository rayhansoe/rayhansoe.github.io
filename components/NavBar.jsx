import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useTheme } from 'next-themes'
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
		document.body.classList.toggle('overflow-y-hidden')
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
					{/* LOGO */}
					<Link href='/'>
						<a>
							<h2 className='font-averia font-bold text-3xl'>
								<span className='text-primary-color'>DEV</span>HOAM
							</h2>
						</a>
					</Link>

					{/* Nav Wrapper */}
					<div
						onClick={mobileNavToggle}
						className={`${
							isMobileNavDisplayed ? 'absolute' : 'hidden'
						} flex flex-col z-10 items-center justify-center w-full 
						flex-1 text-center bg-dark-mode dark:bg-gray-900 
						bg-opacity-60 dark:bg-opacity-80 top-0 left-0 min-h-full 
						cursor-pointer text-xl lg:block lg:relative lg:w-auto 
						lg:min-h-full lg:flex-grow lg:dark:bg-opacity-0 
						lg:bg-opacity-0 lg:text-lg lg:justify-between lg:cursor-default`}>
						{/* Nav Menu */}
						<ul
							className='relative flex flex-col items-center justify-center
							p-24 gap-8 bg-white text-text-dark dark:text-text-light 
							dark:bg-dark-mode rounded pointer-events-auto cursor-default 
							z-20 lg:p-0 lg:flex-row lg:bg-opacity-0 lg:dark:bg-opacity-0 
							lg:text-base lg:justify-between lg:max-w-md lg:flex-shrink lg:mx-auto'
							onClick={stopBubbling}>
							<li>
								<Link href='/'>
									<a>
										<span className='font-averia text-primary-color'>01.</span> About
									</a>
								</Link>
							</li>
							<li>
								<Link href='/projects'>
									<a>
										<span className='font-averia text-primary-color'>02.</span> Project
									</a>
								</Link>
							</li>
							<li>
								<Link href='#'>
									<a>
										<span className='font-averia text-primary-color'>03.</span> Project
									</a>
								</Link>
							</li>
						</ul>
					</div>

					{/* Buttons Wrapper */}
					<div className='menu-buttons flex gap-4'>
						{/* Toggle Dark/Light Mode */}
						{renderThemeChanger()}

						{/* Burger Menu */}
						<MenuIcon className='w-7 h-7 lg:hidden' role='button' onClick={mobileNavToggle} />
					</div>
				</div>
			</Container>
		</section>
	)
}

export default NavBar
