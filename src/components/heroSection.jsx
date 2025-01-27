import BtnRejoindre from './btnRejoindre'
import SymboleCs from '../assets/symbole_cercle_mathv2.svg'
function HeroSection() {
	return (
		<div>
			<div
				className='bg-slate-100 flex flex-col items-center'
				style={{ minHeight: 'calc(100vh - 100px)' }}>
				<div className='container mx-auto px-4 pb-10 pt-44'>
					<div className='hero-content flex flex-col lg:flex-row-reverse items-center lg:items-start gap-14'>
						<div className='flex flex-auto lg:w-2/5 w-3/5 justify-center'>
							<img
								src={SymboleCs}
								alt='Symbole du Cercle Scientifique'
								className='w-9/10 max-w-2xl rounded-lg'
							/>
						</div>
						<div className='flex flex-auto lg:w-3/5 w-full text-center lg:text-left items-center'>
							<div className='w-auto'>
								<h1 className='md:text-5xl text-4xl font-bold text-gray-800 leading-tight'>
									Bienvenue au Cercle Scientifique : Rejoignez une Communauté de
									passionnés
								</h1>
								<p className='py-6 text-lg text-gray-600 lg:w-4/5 pb-16'>
									Plongez dans un univers où la technologie et l’innovation
									s’unissent. Rejoignez des projets captivants et connectez-vous
									avec des esprits visionnaires.
								</p>
								<div className='flex justify-center lg:justify-start'>
									<BtnRejoindre />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeroSection
