import { useState } from 'react'
import './App.css'
import { HeaderContainer } from './components/Header'
import { Intro } from './components/Intro'
import { Skills } from './components/Skills'
import { BetterCheckout } from './components/BetterCheckout'

function App() {

	return (
		<div className='App'>
			<HeaderContainer />
			<Intro/>
			<Skills/>
			<BetterCheckout/>
		</div>
	)
}

export default App
