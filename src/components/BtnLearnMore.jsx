import { ArrowUpRight } from 'lucide-react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function BtnLearnMore({
	to = '#',
	external = false, // Defaults to true for external links
	label = '', // Defaults to 'Rejoindre le cercle'
	icon: Icon = ArrowUpRight, // Defaults to WhatsApp icon
	bgColor = 'bg-white',
	hoverColor = 'hover:bg-slate-900',
	textColor = 'text-slate-900',
	textColorHover = 'hover:text-white',
	bordered = '',
	borderColor = '',
	borderSize = '',
	padding = 'p-3',
	borderColorHover = '',
}) {
	return (
		<div>
			<Link
				to={to}
				rel='noopener noreferrer'
				external={external}
				label={label}
				bgColor={bgColor}
				hoverColor={hoverColor}
				textColor={textColor}
				textColorHover={textColorHover}
				bordered={bordered}
				borderColor={borderColor}
				borderSize={borderSize}
				padding={padding}
				borderColorHover={borderColorHover}>
				{Icon && <Icon />}
			</Link>
		</div>
	)
}

BtnLearnMore.propTypes = {
	to: PropTypes.string,
	external: PropTypes.bool,
	label: PropTypes.string,
	icon: PropTypes.elementType,
	bgColor: PropTypes.string,
	hoverColor: PropTypes.string,
	textColor: PropTypes.string,
	textColorHover: PropTypes.string,
	bordered: PropTypes.string,
	borderColor: PropTypes.string,
	borderSize: PropTypes.string,
	padding: PropTypes.string,
	borderColorHover: PropTypes.string,
}
