import './style.css'
import {FaInstagram} from 'react-icons/fa6'
import {FiYoutube} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'
import cashtime from '../../assets/cashtime-vertical-branco.png'
import { Link } from 'react-router-dom'

export function FooterPolicies() {

	return (

		<footer className='FooterPolicies'>
			<div className='Prefooter'>
				<h1>Lucre junto aos melhores do Mercado Digital na Cashtime</h1>
				<p>Lojista, maximize suas vendas com a plataforma mais avançada de conversão, automação e pagamentos. Não precisa continuar procurando, você achou! <b>Basta criar sua conta.</b></p>
			</div>
			<hr />
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
				<div>
					<p>CASH TIME PAY PRODUTOS E SERVICOS DIGITAIS LTDA</p>
					<span>AV NÁPOLI, Nº 500, PLAZA D'ORO SHOPPING, SALA 406, RESIDENCIAL ELDORADO</span>
					<span>CEP 74.367-970, GOIÂNIA-GO</span>
				</div>
				<span>CNPJ: 37.202.552/0001-92</span>
			</div>
		</footer>
	)
}