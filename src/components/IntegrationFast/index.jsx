import './style.css'
import grafico from '../../assets/grafico.png'
import { LinearGradient } from 'react-text-gradients'
import { motion } from 'framer-motion';


export function Integration() {


	const text = "Inicie e expanda mais rapidamente com a Cashtime";


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

		<section className='IntegrationContainer'>
			<div>
				<motion.h2
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
				{/* <LinearGradient gradient={['to bottom right', '#31b4c7 ,#ffffff']} className='GradientTextIntro'> Cashtime</LinearGradient> */}
				</motion.h2>
				{/* <motion.h2
					initial="hidden"
					animate="visible"
					variants={textVariants}
				>Inicie e expanda mais rapidamente com a </motion.h2> */}
				<p>Maximize suas vendas com o checkout com a melhor taxa de conversão, automação e pagamentos.</p>
				<button>Cadastre-se Agora</button>
			</div>
			<img src={grafico} alt="" />
		</section>
	)
}