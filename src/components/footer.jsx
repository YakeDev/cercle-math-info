import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import csmLogo from '../assets/Logo_Cercle-math_negv2.svg'
import { Mail, Phone } from 'lucide-react'
import { FaFacebook, FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

const Footer = ({
	menuItems = [
		{ label: 'Accueil', to: '/' },
		{ label: 'À propos', to: '/a-propos' },
		{ label: 'Nos activités', to: '/activites' },
		{ label: 'Contact', to: '/contact' },
	],
}) => {
	return (
		<footer className='bg-slate-900'>
			<div className='footer-content grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 items-start container mx-auto  py-24 px-5 gap-8'>
				<div className='lg:col-span-2 md:col-span-1 md:col-start-1 items-start text-slate-400'>
					<img src={csmLogo} alt='' className='w-48' />
					<p className='text-slate-400 mt-4'>
						Le Cercle Scientifique est une plateforme dynamique pour les
						étudiants en technologies, informatique et sciences appliquées.
					</p>
					<div className='flex gap-5 mt-8 text-slate-900'>
						<Link
							to={
								'https://www.linkedin.com/company/cercle-scientifique-math-info/'
							}
							className='bg-slate-200 hover:bg-amber-400 rounded-full p-2.5 transition-colors duration-300'>
							<FaLinkedinIn />
						</Link>
						<Link
							to={'https://twitter.com'}
							className='bg-slate-200 hover:bg-amber-400 rounded-full p-2.5 transition-colors duration-300'>
							<FaFacebook />
						</Link>
						<Link
							to={'https://twitter.com'}
							className='bg-slate-200 hover:bg-amber-400 rounded-full p-2.5 transition-colors duration-300'>
							<FaXTwitter />
						</Link>
						<Link
							to={'https://github.com'}
							className='bg-slate-200 hover:bg-amber-400 rounded-full p-2.5 transition-colors duration-300'>
							<FaGithub />
						</Link>
					</div>
				</div>
				<div className='lg:col-start-4 md:col-start-2 items-start text-slate-400  flex flex-col md:justify-self-center'>
					<h3 className='text-lg font-bold uppercase text-slate-200 mb-4'>
						Liens utiles
					</h3>

					<ul className='flex flex-col  md:space-y-0 md:space-x-5 text-slate-400 list-disc list-inside'>
						{menuItems.map((item, index) => (
							<li key={index} className='py-1'>
								<Link
									className='hover:text-amber-400'
									to={item.to}
									target={item.external ? '_blank' : '_self'}
									rel={item.external ? 'noopener noreferrer' : undefined}>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className='lg:col-start-5 md:col-start-3 items-start gap-5 text-slate-400'>
					<h3 className='text-lg font-bold uppercase text-slate-200 mb-4'>
						Nos coordonnées
					</h3>

					<p className='flex items-center gap-2 py-2'>
						<Phone className='text-amber-400' />
						<span>+243 810 000 000</span>
					</p>

					<p className='flex items-center gap-2 py-2'>
						<Mail className='text-amber-400' />
						<span>csmi@csmathinfo.org</span>
					</p>
				</div>
			</div>

			{/* footer credit */}
			<div className='footer-credits flex items-center justify-center text-sm font-light text-slate-600 bg-slate-950 py-4 gap-2'>
				<p>
					&copy; {new Date().getFullYear()} Cercle Scientifique Math-Info. All
					rights reserved.
				</p>
				|
				<p>
					Design with ❤️ by{' '}
					<a
						href='https://ericaydesign.com'
						target='_blank'
						rel='noopener noreferrer'
						className='text-amber-400'>
						ericaydesign
					</a>
				</p>
			</div>
		</footer>
	)
}
Footer.propTypes = {
	menuItems: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			to: PropTypes.string.isRequired,
			external: PropTypes.bool,
		})
	),
}

export default Footer
