import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa6'

const BtnRejoindre = ({
	to = 'https://wa.me/',
	external = true, // Defaults to true for external links
	label = 'Rejoindre le cercle', // Defaults to 'Rejoindre le cercle'
	icon: Icon = FaWhatsapp, // Defaults to WhatsApp icon
	bgColor = 'bg-green-500',
	hoverColor = 'hover:bg-green-600',
	textColor = 'text-white',
	textColorHover = 'hover:text-white',
	bordered = 'border',
	borderColor = 'border-green-500',
	borderSize = '',
	padding = 'px-6 py-3',
	borderColorHover = '',
}) => {
	return external ? (
		<a
			href={to}
			target='_blank'
			rel='noopener noreferrer'
			className={`flex items-center gap-2 ${bgColor} ${textColor} ${padding} rounded-full ${hoverColor} ${bordered} ${borderColor} ${borderSize} ${borderColorHover} ${textColorHover} transition-colors duration-300 cursor-pointer shadow-md w-fit`}>
			{Icon && <Icon />} {/* Render the icon if provided */}
			{label}
		</a>
	) : (
		<Link
			to={to}
			className={`flex items-center gap-2 ${bgColor} ${textColor} px-6 py-2.5 rounded-full ${hoverColor}  transition-colors duration-300 cursor-pointer shadow-md w-fit`}>
			{Icon && <Icon />} {/* Render the icon if provided */}
			{label}
		</Link>
	)
}

BtnRejoindre.propTypes = {
	to: PropTypes.string.isRequired, // The URL the button links to
	external: PropTypes.bool, // Whether the link is external or internal
	label: PropTypes.string, // The label text displayed on the button
	icon: PropTypes.elementType, // The icon component to display
	bgColor: PropTypes.string, // Background color class
	hoverColor: PropTypes.string, // Hover color class
	bordered: PropTypes.string, // border property
	borderColor: PropTypes.string, // Boder color
	borderSize: PropTypes.string, // boder size
	textColor: PropTypes.string, // Text color class
	textColorHover: PropTypes.string,
	borderColorHover: PropTypes.string,
	padding: PropTypes.string,
}

export default BtnRejoindre
