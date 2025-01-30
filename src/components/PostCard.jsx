import { ArrowUpRight } from 'lucide-react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function PostCard({
	title,
	description,
	imgUrl,
	badges = [],
	date = 'Date',
	postUrl,
}) {
	return (
		<div className='card bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl rounded-4xl w-full transition-shadow duration-300 overflow-hidden'>
			<div className='relative overflow-hidden'>
				<figure>
					<img
						src={imgUrl}
						alt={title}
						className='rounded-t-4xl w-full object-cover h-60 hover:scale-105 transition-transform duration-300'
					/>
				</figure>
				<div className='absolute top-5 left-5 bg-amber-400 px-4 py-2 rounded-full shadow-md'>
					<p className='text-sm text-center text-slate-100 font-bold'>{date}</p>
				</div>
			</div>
			<div className='card-body p-6 pb-8 ps-8'>
				<div className='flex justify-between items-start mb-0'>
					<h3 className='text-2xl font-bold text-gray-800 dark:text-gray-100'>
						{title}
					</h3>
					<Link to={postUrl}>
						<ArrowUpRight
							size={32}
							className='hover:bg-amber-400 text-slate-900 dark:text-gray-100 p-1 rounded-full h-10 w-10 transition-colors duration-300 active:scale-90'
						/>
					</Link>
				</div>
				<p className='text-gray-500 dark:text-gray-300 text-sm'>
					{description}
				</p>
				<div className='card-actions flex flex-wrap gap-2 mt-6'>
					{badges.map((badge, index) => (
						<span
							key={index}
							className='text-sm border px-1.5 badge badge-outline border-gray-400 dark:border-gray-600 text-gray-600 dark:text-gray-200 rounded-full'>
							{badge}
						</span>
					))}
				</div>
			</div>
		</div>
	)
}

// PropTypes for validation
PostCard.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	imgUrl: PropTypes.string.isRequired,
	badges: PropTypes.arrayOf(PropTypes.string),
	date: PropTypes.string,
	postUrl: PropTypes.string,
}
