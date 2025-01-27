import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'
import Logo from '../assets/Logo_Cercle-math_posv2.svg'

export default function Root() {
	return (
		<>
			<div>
				<Navbar logo={Logo} />
			</div>
			<div id='page-content'>
				<Outlet />
			</div>
		</>
	)
}
