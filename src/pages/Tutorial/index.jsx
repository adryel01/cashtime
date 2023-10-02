import { Footer } from '../../components/FooterTutorial'
import { HeaderContainer } from '../../components/Header'
import './style.css'

export function Tutorial() {

	return (

		<div>
			<HeaderContainer/>
			<div className='TutorialContainer'>
				<h1>Tutorial de Integração Cashtime</h1>
				<iframe src="https://www.youtube.com/embed/OwRE7W4UYsI?si=Bstl5pavN57FvMWm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				<div className='StepByStep'>
					<h2>Passo a Passo</h2>
					<ol>
						<li>Se cadastrar na Cashtime Gateway através do site <a href="app.gateway.cashtimepay.com.br/register">app.gateway.cashtimepay.com.br/register</a></li>
						<li>Se cadastrar na Cashtime Checkout através do site <a href="app.cashtimepayments.com.br/register">app.cashtimepayments.com.br/register</a></li>
						<li>Criar um aplicativo na sua loja Shopify ou Woocommerce e inserir o Token de Acesso e Chave de Api na Cashtime Checkout</li>
						<li>Acessar a aba de "Credenciais da Loja" e ativar o botão de checkout da Cashtime na Shopify/Woocommerce e salvar</li>
						<li>Acessar a aba de "Gateway de Pagamento" e clicar no botão de buscar credenciais, aceitar a vinculação com a Cashtime Gateway e salvar</li>
						<li>Pronto! Sua loja está pronta para utilizar a Cashtime.</li>
					</ol>
				</div>
			</div>
			<Footer/>
		</div>

	)
}