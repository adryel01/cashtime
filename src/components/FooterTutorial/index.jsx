import './style.css'
import {FaInstagram} from 'react-icons/fa6'
import {FiYoutube} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'
import cashtime from '../../assets/cashtime-vertical-branco.png'
import { Link } from 'react-router-dom'

export function Footer() {

	return (

		<footer className='FooterTutorial'>
			<nav>
				<div className='LeftFooter'>
					<h2 className='LogoFooter'>
						<img src={cashtime} alt="" />
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
					<p><b>Email:</b> suporte@cashtimepay.com.br</p>
				</div>
				<div className='RightFooter'>
					<h3>
						Liks Úteis
					</h3>
					<a href='/terms-of-use' className='Links'>Termos de Uso</a>
					<a href='/policies' className='Links'>Políticas de Privacidade</a>
				</div>
			</nav>
			<div className='CopyRight'>
				<span>© Copyright 2023・Cashtime・Todos os direitos reservados.</span>
				<span>CNPJ: 37.202.552/0001-92</span>
			</div>
		</footer>
	)
}