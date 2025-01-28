import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { AlignJustify, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import BtnRejoindre from './btnRejoindre'
import { FaWhatsapp } from 'react-icons/fa6'
import Logo from '../assets/Logo_Cercle-math_posv2.svg'

const Navbar = ({
	logo = { Logo }, // Logo image
	menuItems = [
		{ label: 'Accueil', to: '/' },
		{ label: 'À propos', to: '/a-propos' },
		{ label: 'Nos activités', to: '/activites' },
		{ label: 'Contact', to: '/contact' },
	],
}) => {
	const [isMenuClicked, setIsMenuClicked] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)

	// Toggle burger menu
	const updateMenu = () => {
		setIsMenuClicked((prev) => !prev)
	}

	// Detect scroll to add shadow or sticky effect
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<header
			className={`fixed top-0 left-0 w-full z-50 bg-white/40 backdrop-blur-2xl transition-shadow duration-300 ${
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
					className={`absolute md:static bg-gray-100 md:bg-transparent md:text-slate-900 min-h-screen md:min-h-auto md:w-auto w-full top-16 left-0 md:flex items-center md:space-x-5 transition-all duration-300 ${
						isMenuClicked ? 'flex flex-col' : 'hidden'
					}`}>
					<ul className='flex md:flex-row flex-col md:items-center space-y-5 md:space-y-0 md:space-x-5 px-5 py-5'>
						{menuItems.map((item, index) => (
							<li key={index}>
								<Link
									className='hover:text-gray-500'
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
							to='https://wa.me/'
							label='Nous Rejoindre'
							icon={FaWhatsapp} // No icon
							bgColor='bg-green-500'
							hoverColor='hover:bg-green-600'
							textColor='text-white'
						/>
					</div>
					{isMenuClicked ? (
						<X
							onClick={updateMenu}
							size={32}
							className='cursor-pointer md:hidden'
							aria-label='Close menu'
						/>
					) : (
						<AlignJustify
							onClick={updateMenu}
							size={32}
							className='cursor-pointer md:hidden'
							aria-label='Open menu'
						/>
					)}
				</div>
			</nav>
		</header>
	)
}

Navbar.propTypes = {
	logo: PropTypes.string, // Path to the logo image
	menuItems: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired, // Text for the menu item
			to: PropTypes.string.isRequired, // Link destination
			external: PropTypes.bool, // Whether the link is external
		})
	),
	btnProps: PropTypes.object, // Props to pass to BtnRejoindre
}

export default Navbar
