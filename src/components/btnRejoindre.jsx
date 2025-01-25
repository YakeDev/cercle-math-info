import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa6'

const BtnRejoindre = () => {
	return (
		<Link
			to='#'
			className='flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-amber-400 transition-colors duration-300 cursor-pointer shadow-md w-fit'>
			<FaWhatsapp /> Nous rejoindre
		</Link>
	)
}

export default BtnRejoindre
