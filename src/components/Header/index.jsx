import './style.css'
import { LinearGradient } from 'react-text-gradients'

export function HeaderContainer() {

	return (
		<div className="HeaderContainer">
			<h1 className='LogoHeader'>
				Cashtime
			</h1>
			<nav className="NavHeader">
				<a href="" className='LinkAcessHeader'>Acessar Plataforma</a>
				<button className='SignUpButtonHeader'>Cadastre-se Agora</button>
			</nav>
		</div>
	)
}