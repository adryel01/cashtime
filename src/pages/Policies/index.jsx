import { FooterPolicies } from '../../components/FooterPolicies'
import { HeaderContainer } from '../../components/Header'
import { PoliciesComponent } from '../../components/PoliciesComponent'
import './style.css'

export function Policies() {

	return (

		<div>
			<HeaderContainer />
			<PoliciesComponent/>
			<FooterPolicies />
		</div>
	)
}