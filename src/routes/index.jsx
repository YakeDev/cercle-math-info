import HeroSection from '../components/heroSection'
import CallToAction from '../components/callToAction'
import Partner from '../components/partner'
import Footer from '../components/footer'
import Cursor from '../components/Cursor'
import { useState } from 'react'
import UpcomingEventSection from '../components/UpcomingEventSection'
import EventRecent from '../components/EventRecent'

export default function Index() {
	const [isHovered, setIsHovered] = useState(false)

	return (
		// Ajoute la classe dark:bg pour le fond général
		<div className='dark:bg-slate-900 transition-colors duration-300'>
			{/* Cursor */}
			<Cursor isHovered={isHovered} />

			{/* Hero Section */}
			<div className='dark:bg-slate-800'>
				<HeroSection />
			</div>

			{/* Upcoming Events */}
			<UpcomingEventSection />

			{/* Call to action */}
			<div
				className='bg-slate-100 dark:bg-slate-900 mx-auto transition-colors duration-300'
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}>
				<CallToAction />
			</div>

			{/* Last event */}
			<div className='Section dark:bg-slate-900'>
				<EventRecent />
			</div>

			{/* Our partner */}
			<div className='Section dark:bg-slate-900'>
				<Partner />
			</div>

			{/* Footer */}
			<div
				className='bg-slate-100 dark:bg-slate-800 mx-auto transition-colors duration-300'
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}>
				<Footer />
			</div>
		</div>
	)
}
