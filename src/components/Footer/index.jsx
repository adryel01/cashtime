import './style.css'
import {FaInstagram} from 'react-icons/fa6'
import {FiYoutube} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'

export function Footer() {

	return (

		<footer>
			<nav>
				<div className='LeftFooter'>
					<h2 className='LogoFooter'>
						Cashtime
					</h2>
					<div className='IconsFooter'>
						<FaInstagram color='#fff'/>
						<FiYoutube color='#fff'/>
						<FaTwitter color='#fff'/>
					</div>
				</div>
				<div className='CenterFooter'>
					<h3>
						Fale Conosco
					</h3>
					<p><b>Email:</b> contato@cashtime.com.br</p>
				</div>
				<div className='RightFooter'>
					<h3>
						Liks Úteis
					</h3>
					<p>Termos de Uso</p>
					<p>Políticas de Privacidade</p>
				</div>
			</nav>
			<div className='CopyRight'>
				<span>© Copyright 2023・Cashtime・Todos os direitos reservados.</span>
				<span>CNPJ: 37.202.552/0001-92</span>
			</div>
		</footer>
	)
}