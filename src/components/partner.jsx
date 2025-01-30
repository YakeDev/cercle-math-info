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
				<h2 className='text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white'>
					{title}
				</h2>
			</div>
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>
				<img
					src={LogoGithub}
					alt='Logo Github'
					className='w-56 object-contain'
				/>
				<img
					src={LogoGdg}
					alt='Logo Google Developers'
					className='w-56 object-contain'
				/>
				<img
					src={LogoMsAmbassador}
					alt='Logo Microsoft Ambassador'
					className='w-56 object-contain'
				/>
				<img
					src={LogOrangeDigital}
					alt='Logo Orange Digital Center'
					className='w-56 object-contain'
				/>
				<img
					src={LogoAwsEducate}
					alt='Logo AWS Educate'
					className='w-56 object-contain'
				/>
			</div>
		</div>
	)
}

Partner.propTypes = {
	title: PropTypes.string,
}

export default Partner
