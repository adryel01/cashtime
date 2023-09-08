import './style.css'
import shopify from '../../assets/shopify.png'
import meta from '../../assets/meta.png'

export function Partners() {

	return (

		<section className='PartnersContainer'>
			<div className='BackgroundPartners'>
				<h1>Integração com os melhores aplicativos do mercado digital</h1>
				<h2>Aqui na Cashtime você consegue integrações para o que precisar.</h2>
			</div>

			<section className='SkillContainer'>
				<div className='slider'>
					<div className='slide-track'>
						<div className='slide'><img src={shopify} alt="" /></div>
						<div className='slide'><img src={meta} alt="" /></div>
						<div className='slide'><button>Pagamento em D+2</button></div>
						<div className='slide'><button>Pix na Hora</button></div>
						<div className='slide'><button>Recuperação de Carrinho</button></div>
						<div className='slide'><button>Melhores Taxas do Mercado</button></div>
						<div className='slide'><button>Bloqueio Zero</button></div>
					</div>
				</div>
			</section>
		</section>
	)
}