import './style.css'
import { LinearGradient } from 'react-text-gradients'
import cashtime from '../../assets/cashtime-horizontal-branco.png'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'


export function HeaderContainer() {

	function gtag_report_conversion(url) {
		var callback = function () {
			if (typeof (url) != 'undefined') {
				window.location = url;
			}
		};
		gtag('event', 'conversion', {
			'send_to': 'AW-11371886781/SXY2CN23wOsYEL3xxK4q',
			'event_callback': callback
		});
		return false;
	}
	

	return (
		<div className="HeaderContainer">
			<Link to={'/'} className='LogoHeader'>
				<img src={cashtime} alt="" />
			</Link>
			<nav className="NavHeader">
				<a href="https://app.gateway.cashtimepay.com.br/register" className='LinkAcessHeader' target='_blank' onClick={gtag_report_conversion('https://app.gateway.cashtimepay.com.br/register')}>Acessar Gateway</a>
				<a href='https://app.cashtimepayments.com.br/register' target='_blank'><button className='SignUpButtonHeader'>Acessar Checkout</button></a>
			</nav>
		</div>
	)
}