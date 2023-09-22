import './style.css'
import { LinearGradient } from 'react-text-gradients'
import cashtime from '../../assets/cashtime-horizontal-branco.png'
import { Link } from 'react-router-dom'

export function HeaderContainer() {

	return (
		<div className="HeaderContainer">
			<Link to={'/'} className='LogoHeader'>
				<img src={cashtime} alt="" />
			</Link>
			<nav className="NavHeader">
				<a href="https://app.gateway.cashtimepay.com.br/login" className='LinkAcessHeader' target='_blank'>Acessar Plataforma</a>
				<a href='https://app.gateway.cashtimepay.com.br/register' target='_blank'><button className='SignUpButtonHeader'>Cadastre-se Agora</button></a>
			</nav>
		</div>
	)
}