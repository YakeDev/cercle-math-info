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
		<div>
			{/* Cursor */}
			<Cursor isHovered={isHovered} />
			{/* Hero Section */}
			<HeroSection />
			{/* Upcoming Events */}
			<UpcomingEventSection />
			{/* Call to action */}
			<div
				className='bg-slate-100 mx-auto'
				onMouseEnter={() => setIsHovered(true)} // Agrandir le curseur
				onMouseLeave={() => setIsHovered(false)} // Rétrécir le curseur
			>
				<CallToAction />
			</div>

			{/* Last event */}
			<div className='Section'>
				<EventRecent />
			</div>

			{/* Our partner */}
			<div className='Section'>
				<Partner />
			</div>

			{/* Footer */}
			<div
				className='bg-slate-100 mx-auto'
				onMouseEnter={() => setIsHovered(true)} // Agrandir le curseur
				onMouseLeave={() => setIsHovered(false)} // Rétrécir le curseur
			>
				<Footer />
			</div>
		</div>
	)
}
