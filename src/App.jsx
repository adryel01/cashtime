import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home'
import { Terms } from './pages/TermsOfUse';

function App() {

	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/terms-of-use' element={<Terms/>}/>
			</Routes>
			
		</div>
	)
}

export default App
