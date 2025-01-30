import { Check } from 'lucide-react'
import BtnRejoindre from './btnRejoindre'
import ctaImg from '../assets/whyUs.jpg'
import { FaWhatsapp } from 'react-icons/fa6'

function CallToAction() {
	return (
		<div className='container flex flex-col-reverse lg:flex-row items-center gap-16 md:gap-10 lg:gap-20 mx-auto p-14 py-24 lg:p-28 '>
			{/* Texte */}
			<div className='flex flex-col flex-1 items-start space-y-6 order-2 md:order-1 sm:order-1  p-8 rounded-lg'>
				<h2 className='text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white'>
					Pourquoi nous Rejoindre ?
				</h2>
				<p className='text-gray-600 dark:text-gray-300 text-base md:text-lg'>
					Rejoignez une communauté pour développer vos compétences et élargir
					votre réseau.
				</p>
				<div className='mt-4'>
					<ul className='space-y-4 text-left text-gray-500 dark:text-gray-400'>
						<li className='flex items-start space-x-3 rtl:space-x-reverse'>
							<Check size={36} className='text-amber-400 dark:text-amber-500' />
							<span>
								Participez à des formations et projets innovants pour enrichir
								vos connaissances techniques et académiques.
							</span>
						</li>
						<li className='flex items-start space-x-3 rtl:space-x-reverse'>
							<Check size={36} className='text-amber-400 dark:text-amber-500' />
							<span>
								Rejoignez une communauté dynamique pour échanger, partager des
								idées et créer des solutions.
							</span>
						</li>
						<li className='flex items-start space-x-3 rtl:space-x-reverse'>
							<Check size={36} className='text-amber-400 dark:text-amber-500' />
							<span>
								Connectez-vous avec des étudiants, experts et entreprises pour
								élargir vos opportunités professionnelles.
							</span>
						</li>
					</ul>
					<div className='mt-16'>
						<BtnRejoindre
							to='https://chat.whatsapp.com/Jt1SDlpq7Ot34Po6hGemya'
							label='Nous Rejoindre'
							icon={FaWhatsapp}
							bgColor='bg-green-500 dark:bg-green-600'
							hoverColor='hover:bg-green-600 dark:hover:bg-green-700'
							textColor='text-white'
						/>
					</div>
				</div>
			</div>

			{/* Image */}
			<div className='flex flex-1 items-center justify-center overflow-hidden rounded-4xl w-full bg-amber-300 dark:bg-gray-700 order-1 md:order-2 lg:mb-0 mb-4'>
				<img
					src={ctaImg}
					alt='Illustration expliquant pourquoi vous devriez nous choisir'
					className='w-full h-auto max-h-[600px] object-cover rounded-4xl'
				/>
			</div>
		</div>
	)
}

export default CallToAction
