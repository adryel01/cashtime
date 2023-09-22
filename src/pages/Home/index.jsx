import { BetterCheckout } from "../../components/BetterCheckout";
import { Footer } from "../../components/Footer";
import { HeaderContainer } from "../../components/Header";
import { Integration } from "../../components/IntegrationFast";
import { Intro } from "../../components/Intro";
import { Partners } from "../../components/Partners";
import { Skills } from "../../components/Skills";
import './style.css'

export function Home (){

	return (
		<div>
			<HeaderContainer />
			<Intro/>
			<Skills/>
			<BetterCheckout/>
			<Integration/>
			<Partners/>
			<Footer/>
		</div>
	)
}