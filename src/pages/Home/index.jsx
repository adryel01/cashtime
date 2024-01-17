import { BetterCheckout } from "../../components/BetterCheckout";
import { Footer } from "../../components/Footer";
import { HeaderContainer } from "../../components/Header";
import { Integration } from "../../components/IntegrationFast";
import { Intro } from "../../components/Intro";
import { Partners } from "../../components/Partners";
import { Skills } from "../../components/Skills";
import { TutorialLink } from "../../components/TutorialLink";
import { Whatsapp } from "../../components/Whatsapp";
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
			<TutorialLink/>
			{/* <Whatsapp/> */}
			<Footer/>
		</div>
	)
}