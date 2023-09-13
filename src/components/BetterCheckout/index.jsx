import './style.css'
import { FaDownLeftAndUpRightToCenter } from 'react-icons/fa6'
import { BsGraphUpArrow } from 'react-icons/bs'
import { RxDashboard } from 'react-icons/rx'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { motion } from "framer-motion"

export function BetterCheckout() {

	const text = "Melhor checkout do Mercado";


	const textVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.1, // Adiciona um pequeno atraso entre cada letra
			},
		},
	};

	return (

		<section className='BetterCheckoutContainer'>
			<div className='BetterCheckoutTextContainer'>
				{/* <motion.h1 viewport={{ once: true }}
					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: 100 }}
					transition={{ type: 'spring', stiffness: 120, duration: 1 }}
				>+95% de taxa de aprovação</motion.h1> */}
				<motion.h1
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
				>
					{text.split('').map((letter, index) => (
						<motion.span
							key={index}
							variants={textVariants}
						>
							{letter}
						</motion.span>
					))}
				</motion.h1>
				<h2>Com nossa tecnologia de ponta e colaborações estratégicas, garantimos uma taxa de aprovação de pagamento excepcionalmente alta, assegurando que praticamente todas as suas transações sejam processadas com êxito e segurança absoluta.</h2>
			</div>


			<ul className='ListCardsBetterCheckout'>
				<li className='CardBetter'>
					<div className='HeaderCard'>
						<BsGraphUpArrow color='#fff' size={32} />
						<h3>Checkout de Alta Conversão</h3>
					</div>
					<p>Uma solução de checkout com valiosos recursos pensados para potencializar ainda mais as suas vendas online.</p>
				</li>
				<li className='CardBetter'>
					<div className='HeaderCard'>
						<FaDownLeftAndUpRightToCenter color='#fff' size={32} />
						<h3>Centralize Suas Lojas</h3>
					</div>
					<p>Você não precisa ter apenas uma loja. Tenha tudo que precisa para operar múltiplos negócios do mesmo lugar.</p>
				</li>
				<li className='CardBetter'>
					<div className='HeaderCard'>
						<RxDashboard color='#fff' size={32} />
						<h3>Dashboard em Tempo Real</h3>
					</div>
					<p>Uma infraestrutura otimizada para acompanhar seus resultados de forma simples e eficiente.</p>
				</li>
				<li className='CardBetter'>
					<div className='HeaderCard'>
						<BsFillCartCheckFill color='#fff' size={32} />
						<h3>Recuperação de Carrinho</h3>
					</div>
					<p>Contato direto com o cliente para entender o cancelamento e menor risco de perder dinheiro com vendas canceladas indevidamente.</p>
				</li>
			</ul>

		</section>
	)
}