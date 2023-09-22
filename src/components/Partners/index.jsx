import './style.css'
import shopify from '../../assets/shopify.png'
import meta from '../../assets/meta.png'
import google from '../../assets/google.png'
import tiktok from '../../assets/tiktok.png'
import taboola from '../../assets/taboola.png'
import reportana from '../../assets/reportana.png'
import woocommerce from '../../assets/woocommerce.png'

export function Partners() {

	return (

		<section className='PartnersContainer'>
			<div className='BackgroundPartners'>
				<h1>Integração com os melhores aplicativos do mercado digital</h1>
				<h2>Aqui na Cashtime você consegue integrações para o que precisar.</h2>
			</div>

			<section className='SkillContainer'>
				<div className='slider'>
					<div className='slide-track-left-partners slide-track'>
						<div className='slide'><img src={shopify} alt="" /></div>
						<div className='slide'><img src={meta} alt="" /></div>
						<div className='slide'><img src={woocommerce} alt="" /></div>
						<div className='slide'><img src={google} alt="" /></div>
						<div className='slide'><img src={tiktok} alt="" /></div>
						<div className='slide'><img src={taboola} alt="" /></div>
						<div className='slide'><img src={reportana} alt="" /></div>
					</div>
				</div>
			</section>
		</section>
	)
}