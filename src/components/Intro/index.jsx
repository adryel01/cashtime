import './style.css'
import { LinearGradient } from 'react-text-gradients'
import ButtonStart from '../../assets/ButtonStart.png'
import Robot from '../../assets/robotfinal.png'
import { motion } from "framer-motion"

export function Intro() {

	return (

		<section className='IntroContainer'>
			<div className='HeaderIntro'>
				<div className='TaxIntro'><span>%</span>A melhor taxa do mercado</div>
				<div className='PreContainerGradientHeader'>
					<div className='ContainerGradientHeader'>
						<p>A Próxima</p>
						<LinearGradient gradient={['to bottom right', '#31b4c7 ,#ffffff']} className='GradientTextIntro'>Geração</LinearGradient>
					</div>
					<img src={ButtonStart} alt="" className='ImageHeaderIntroContainer' />
				</div>
				<p>de Checkout de Pagamentos</p>
				<span>A resposta definitiva para aprimorar o seu negócio digital está ao seu alcance. Nossa plataforma oferece recursos inteligentes para impulsionar suas vendas através de automação, um processo de finalização de compra inigualável e muito mais. Agora, você encontrou a solução que estava buscando.</span>
				<button className='ButtonAccess'>Acessar Agora</button>
			</div>
			<div className='BackGroundImageIntro'>
				<motion.img src={Robot} alt="" className='ImageIntroContainer'
					initial={{ opacity: 0, y: -30, }}
					whileInView={
						{
							opacity: 1,
							y: 0,
							transition: {
								duration: 1.5,
							},
						}
					}
				/>
			</div>

		</section>
	)
}