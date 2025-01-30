import EventCard from './cardEvent'
import imgEvent1 from '../assets/img_card_0.jpg'
import imgEvent2 from '../assets/img_card_1.jpg'
import imgEvent3 from '../assets/img_event_3.jpg'

function UpcomingEventSection() {
	return (
		<div className='container mx-auto px-4 py-28 dark:bg-slate-900'>
			<div className='pb-8'>
				<h2 className='text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white'>
					Prochains événements
				</h2>
			</div>

			<div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10'>
				{/* Example EventCard Usage */}
				<EventCard
					title='Bootcamp Git & Github'
					description='Git et Github pour les debutants. Apprenez à collaborer sur des projets open-source.'
					imgUrl={imgEvent1}
					date='25 Janv 2025'
					heure='20h00'
					adress='Google Meet'
				/>
				<EventCard
					title='Conférence AI'
					description='Explorez les dernières tendances en intelligence artificielle avec des experts de renom.'
					imgUrl={imgEvent2}
					date='25 Fev 2025'
					heure='20h00'
					adress='Google Meet'
				/>
				<EventCard
					title='Webinaire React 18'
					description='Découvrez les nouvelles fonctionnalités de React 18 et comment les utiliser.'
					imgUrl={imgEvent3}
					date='25 Mars 2025'
					heure='20h00'
					adress='Google Meet'
				/>
			</div>
		</div>
	)
}

export default UpcomingEventSection
