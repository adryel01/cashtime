import './style.css'

export function Skills() {

	return (

		<section className='SkillContainer'>
			<div className='slider'>
				<div className='slide-track-left slide-track'>
					<div className='slide'><button>Checkout Personalizado</button></div>
					<div className='slide'><button>Saque todos os dias</button></div>
					<div className='slide'><button>Alta Conversão</button></div>
					<div className='slide'><button>Upsell e Order Bump</button></div>
					<div className='slide'><button>Recuperação de Carrinho</button></div>
					<div className='slide'><button>Melhores Taxas do Mercado</button></div>
					<div className='slide'><button>Integração com Shopify</button></div>
				</div>
				<div className='slide-track-right slide-track'>
					<div className='slide'><button>Saque Rápido</button></div>
					<div className='slide'><button>Pix D+0</button></div>
					<div className='slide'><button>Cartão D+2</button></div>
					<div className='slide'><button>Automação de Webhooks</button></div>
					<div className='slide'><button>Análise em Tempo Real</button></div>
					<div className='slide'><button>Suporte Rápido</button></div>
					<div className='slide'><button>Sem Bloqueios</button></div>
				</div>
			</div>
		</section>
	)
}