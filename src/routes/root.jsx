import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'

export default function Root() {
	return (
		<>
			<div>
				<Navbar />
			</div>
			<div id='page-content'>
				<Outlet />
			</div>
		</>
	)
}
