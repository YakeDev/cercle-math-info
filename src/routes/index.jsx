import SymboleCs from '../assets/symbole_cercle_mathv2.svg'
import BtnRejoindre from '../components/btnRejoindre'

export default function Index() {
	return (
		<div
			className='bg-slate-100 flex items-center'
			style={{ minHeight: 'calc(100vh - 100px)' }}>
			<div className='container mx-auto px-4 py-10 pt-30'>
				<div className='hero-content flex flex-col lg:flex-row-reverse items-center lg:items-start gap-14'>
					<div className='flex flex-auto w-2/5 justify-center'>
						<img
							src={SymboleCs}
							alt='Illustration'
							className='w-9/10 max-w-2xl rounded-lg '
						/>
					</div>
					<div className='flex flex-auto w-3/5 text-center lg:text-left items-center '>
						<div className='w-auto'>
							<h1 className='text-5xl font-bold text-gray-800 leading-tight'>
								Bienvenue au Cercle Scientifique : Rejoignez une Communauté de
								passionnés
							</h1>
							<p className='py-6 text-lg text-gray-600 w-4/5 pb-16'>
								Plongez dans un univers où la technologie et l’innovation
								s’unissent. Rejoignez des projets captivants et connectez-vous
								avec des esprits visionnaires.
							</p>
							<BtnRejoindre />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
