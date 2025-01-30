import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { AlignJustify, X, Sun, Moon } from 'lucide-react'
import { useState, useEffect } from 'react'
import BtnRejoindre from './btnRejoindre'
import { FaWhatsapp } from 'react-icons/fa6'
import Logo from '../assets/Logo_Cercle-math_posv2.svg'

const Navbar = ({
	logo = Logo,
	menuItems = [
		{ label: 'Accueil', to: '/' },
		{ label: 'À propos', to: '/a-propos' },
		{ label: 'Nos activités', to: '/activites' },
		{ label: 'Contact', to: '/contact' },
	],
}) => {
	const [isMenuClicked, setIsMenuClicked] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)
	const [darkMode, setDarkMode] = useState(
		localStorage.getItem('theme') === 'dark'
	)

	// Toggle burger menu
	const updateMenu = () => {
		setIsMenuClicked((prev) => !prev)
	}

	// Detect scroll to add shadow or sticky effect
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	// // Toggle Dark Mode
	// useEffect(() => {
	// 	if (darkMode) {
	// 		document.documentElement.classList.add('dark')
	// 		localStorage.setItem('theme', 'dark')
	// 	} else {
	// 		document.documentElement.classList.remove('dark')
	// 		localStorage.setItem('theme', 'light')
	// 	}
	// }, [darkMode])

	return (
		<header
			className={`fixed top-0 left-0 w-full z-50 bg-white/40 dark:bg-gray-900/40 backdrop-blur-2xl transition-shadow duration-300 ${
				isScrolled ? 'shadow-lg' : ''
			}`}>
			<nav className='container mx-auto flex justify-between items-center py-2 px-5 md:px-0'>
				{/* Logo */}
				<div>
					<Link to={'/'}>
						<img className='h-12' src={logo} alt='Logo' />
					</Link>
				</div>

				{/* Navigation Menu */}
				<div
					className={`absolute md:static bg-gray-100 md:bg-transparent md:text-slate-900 dark:md:text-white min-h-screen md:min-h-auto md:w-auto w-full top-16 left-0 md:flex items-center md:space-x-5 transition-all duration-300 ${
						isMenuClicked ? 'flex flex-col' : 'hidden'
					}`}>
					<ul className='flex md:flex-row flex-col md:items-center space-y-5 md:space-y-0 md:space-x-5 px-5 py-5'>
						{menuItems.map((item, index) => (
							<li key={index}>
								<Link
									className='hover:text-gray-500 dark:hover:text-gray-400'
									to={item.to}
									target={item.external ? '_blank' : '_self'}
									rel={item.external ? 'noopener noreferrer' : undefined}>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* Action Buttons */}
				<div className='flex items-center space-x-6'>
					<div className='hidden sm:flex'>
						<BtnRejoindre
							to='https://chat.whatsapp.com/Jt1SDlpq7Ot34Po6hGemya'
							label='Nous Rejoindre'
							icon={FaWhatsapp}
							bgColor='bg-green-500 dark:bg-green-600'
							hoverColor='hover:bg-green-600 dark:hover:bg-green-700'
							textColor='text-white'
						/>
					</div>

					{/* Dark Mode Toggle */}
					{/* <button
						onClick={() => setDarkMode(!darkMode)}
						className='p-2 rounded-full transition-all bg-gray-200 dark:bg-gray-700'>
						{darkMode ? <Sun size={24} /> : <Moon size={24} />}
					</button> */}

					{/* Mobile Menu Icon */}
					{isMenuClicked ? (
						<X
							onClick={updateMenu}
							size={32}
							className='cursor-pointer md:hidden dark:text-white'
							aria-label='Close menu'
						/>
					) : (
						<AlignJustify
							onClick={updateMenu}
							size={32}
							className='cursor-pointer md:hidden dark:text-white'
							aria-label='Open menu'
						/>
					)}
				</div>
			</nav>
		</header>
	)
}

Navbar.propTypes = {
	logo: PropTypes.string,
	menuItems: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			to: PropTypes.string.isRequired,
			external: PropTypes.bool,
		})
	),
}

export default Navbar
