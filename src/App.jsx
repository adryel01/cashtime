import { useState } from 'react'
import './App.css'
import { HeaderContainer } from './components/Header'
import { Intro } from './components/Intro'
import { Skills } from './components/Skills'
import { BetterCheckout } from './components/BetterCheckout'
import { Integration } from './components/IntegrationFast'
import { Partners } from './components/Partners'
import { Footer } from './components/Footer'

function App() {

	return (
		<div className='App'>
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

export default App
