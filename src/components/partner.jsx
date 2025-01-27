import PropTypes from 'prop-types'
import LogoGithub from '../assets/partners/github.jpg'
import LogoGdg from '../assets/partners/gdg.jpg'
import LogoMsAmbassador from '../assets/partners/ms_learn_amb.jpg'
import LogOrangeDigital from '../assets/partners/orange_digital_center.jpg'
import LogoAwsEducate from '../assets/partners/aws_educate.jpg'

function Partner({ title = 'Nos partenaires' }) {
	return (
		<div className='container mx-auto py-28'>
			<div className='pb-16'>
				<h2 className='text-5xl font-bold'>{title}</h2>
			</div>
			<div className='grid grid-cols-2  md:grid-cols-3  lg:grid-cols-5 gap-8'>
				<img src={LogoGithub} alt='Logo github' className='w-56' />
				<img src={LogoGdg} alt='Logo google developers' className='w-56' />
				<img
					src={LogoMsAmbassador}
					alt='Logo Miscrosoft Ambassador'
					className='w-56'
				/>
				<img src={LogOrangeDigital} alt='Logo github' className='w-56' />
				<img src={LogoAwsEducate} alt='Logo github' className='w-56' />
			</div>
		</div>
	)
}

Partner.propTypes = {
	title: PropTypes.string.isRequired,
}

export default Partner
