import { Link } from 'react-router-dom'
import Logo from '../assets/Logo_Cercle-math_posv2.svg'
import { AlignJustify, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import BtnRejoindre from './btnRejoindre'

const Navbar = () => {
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
		<>
			<header
				className={`fixed top-0 left-0 w-full z-50 bg-white transition-shadow duration-300 ${
					isScrolled ? 'shadow-lg' : 'shadow'
				}`}>
				<nav className='container mx-auto flex justify-between items-center py-2 px-5 md:px-0'>
					<div>
						<Link className='hover:text-gray-500' to={'/'}>
							<img className='h-12' src={Logo} alt='Logo de cs math-info' />
						</Link>
					</div>
					<div
						className={`absolute md:static bg-gray-100 md:bg-transparent md:text-slate-900 min-h-screen md:min-h-auto md:w-auto w-full top-16 left-0 md:flex items-center md:space-x-5 transition-all duration-300 ${
							isMenuClicked ? 'flex flex-col' : 'hidden'
						}`}>
						<ul className='flex md:flex-row flex-col md:items-center space-y-5 md:space-y-0 md:space-x-5 px-5 py-5'>
							<li>
								<Link className='hover:text-gray-500' to={'/'}>
									Accueil
								</Link>
							</li>
							<li>
								<Link className='hover:text-gray-500' to={'/a-propos'}>
									À propos
								</Link>
							</li>
							<li>
								<Link className='hover:text-gray-500' to={'/activites'}>
									Nos activités
								</Link>
							</li>
							<li>
								<Link className='hover:text-gray-500' to={'/contact'}>
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<div className='flex items-center space-x-6'>
						<BtnRejoindre />
						{isMenuClicked ? (
							<X
								onClick={updateMenu}
								size={32}
								className='cursor-pointer md:hidden'
							/>
						) : (
							<AlignJustify
								onClick={updateMenu}
								size={32}
								className='cursor-pointer md:hidden'
							/>
						)}
					</div>
				</nav>
			</header>
		</>
	)
}

export default Navbar
