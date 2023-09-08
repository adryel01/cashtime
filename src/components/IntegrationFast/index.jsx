import './style.css'
import grafico from '../../assets/grafico.png'
import { LinearGradient } from 'react-text-gradients'

export function Integration (){

	return (

		<section className='IntegrationContainer'>
			<div>
				<h2>Inicie e expanda mais rapidamente com a <LinearGradient gradient={['to bottom right', '#31b4c7 ,#ffffff']} className='GradientTextIntro'>Cashtime</LinearGradient></h2>
				<p>Maximize suas vendas com a plataforma mais avançada de conversão, automação e pagamentos.</p>
				<button>Cadastre-se Agora</button>
			</div>
			<img src={grafico} alt="" />
		</section>
	)
}