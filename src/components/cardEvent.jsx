import { Clock, MapPinIcon, Video } from 'lucide-react'
import PropTypes from 'prop-types'
import BtnRejoindre from './btnRejoindre'

export default function EventCard({
	title,
	description,
	imgUrl,
	badges = [],
	adress = 'Adresse',
	date = 'Date',
	heure = 'Heure',
	urlEvent,
}) {
	return (
		<div
			className='card bg-white shadow-lg rounded-4xl w-full transition-all duration-300 
                      hover:shadow-xl dark:bg-slate-800 dark:hover:bg-slate-700'>
			<div className='relative'>
				<figure>
					<img
						src={imgUrl}
						alt={title}
						className='rounded-t-4xl w-full object-cover h-60'
					/>
				</figure>
				<div
					className='absolute top-5 left-5 bg-amber-400 px-4 py-2 rounded-full shadow-md 
                             dark:bg-amber-500 dark:text-slate-900'>
					<p className='text-sm text-center text-slate-100 font-bold'>{date}</p>
				</div>
			</div>
			<div className='card-body p-6 pb-8 ps-8'>
				<div className=''>
					<p className='flex items-center gap-3 text-gray-500 text-sm mb-2 dark:text-slate-400'>
						<span className='flex items-center gap-1'>
							<Clock size={16} className='dark:text-slate-300' />
							{heure}
						</span>
						<span className='flex items-center gap-1'>
							<MapPinIcon size={16} className='dark:text-slate-300' />
							{adress}
						</span>
					</p>
				</div>
				<h3 className='text-2xl font-bold text-gray-800 dark:text-white'>
					{title}
				</h3>
				<div className='card-actions flex flex-wrap gap-2 pb-2'>
					{badges.map((badge, index) => (
						<span
							key={index}
							className='text-sm border px-3 py-1 border-gray-400 text-gray-600 rounded-full 
                                      dark:border-slate-600 dark:text-slate-300 
                                      hover:bg-amber-100 dark:hover:bg-slate-600 transition-colors'>
							{badge}
						</span>
					))}
				</div>
				<p className='text-gray-500 mb-4 text-sm dark:text-slate-400'>
					{description}
				</p>
				<BtnRejoindre
					to={urlEvent || 'https://meet.google.com/'}
					external={true}
					label='Rejoindre'
					icon={Video} // Defaults to Video icon
					bgColor='bg-slate-900 dark:bg-slate-700'
					hoverColor='hover:bg-amber-400 dark:hover:bg-amber-500'
					textColor='text-white dark:text-slate-200'
					bordered=''
					borderColor='border-slate-900 dark:border-slate-700'
					padding='px-6 py-2'
				/>
			</div>
		</div>
	)
}

// PropTypes for validation
EventCard.propTypes = {
	title: PropTypes.string.isRequired, // Title must be a string and is required
	description: PropTypes.string.isRequired, // Description must be a string and is required
	imgUrl: PropTypes.string.isRequired, // Image URL must be a string and is required
	badges: PropTypes.arrayOf(PropTypes.string), // Badges must be an array of strings (optional)
	adress: PropTypes.string, // Address must be a string (optional)
	date: PropTypes.string, // Date must be a string (optional)
	heure: PropTypes.string, // Time must be a string (optional)
	urlEvent: PropTypes.string, // URL for the event must be a string (optional)
}
