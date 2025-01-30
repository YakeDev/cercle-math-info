import PostCard from './PostCard'
import imgPost1 from '../assets/post_img_1.jpg'
import imgPost2 from '../assets/post_img_2.jpg'
import imgPost3 from '../assets/post_img_3.jpg'

function EventRecent() {
	return (
		<div className='container mx-auto px-4 pt-28'>
			<div className='pb-8'>
				<h2 className='text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white'>
					Dernières actualités
				</h2>
			</div>

			<div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10'>
				<PostCard
					title='Bootcamp Git & Github'
					description='Git et Github pour les débutants. Apprenez à collaborer sur des projets open-source.'
					imgUrl={imgPost1}
					date='25 Janv 2025'
					postUrl='/'
					badges={['Technologie', 'Innovation']}
				/>
				<PostCard
					title='Conférence Web 3.0'
					description='Découvrez les dernières tendances du web 3.0 avec nos experts.'
					imgUrl={imgPost2}
					date='25 Oct 2024'
					postUrl='/'
					badges={['Web', 'Conférence']}
				/>
				<PostCard
					title='NodeJS pour les débutants'
					description='Apprenez à utiliser NodeJS pour les nouveaux de la programmation.'
					imgUrl={imgPost3}
					date='25 Sept 2024'
					postUrl='/'
					badges={['NodeJS', 'Développement']}
				/>
			</div>
		</div>
	)
}

export default EventRecent
