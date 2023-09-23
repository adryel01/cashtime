
import { Footer } from "../../components/Footer";
import { FooterTerms } from "../../components/FooterTerms";
import { HeaderContainer } from "../../components/Header";
import { TermsComponent } from "../../components/TermsComponent";
import './style.css'


export function Terms() {

	return (

		<div>
			<HeaderContainer />
			<TermsComponent/>
			<FooterTerms/>
		</div>
	)
}