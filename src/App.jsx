import { useState } from 'react'
import Card from './Card'

import './App.css'

function App() {
	//Aqui deberias agregar los estados y los handlers para los inputs
	const [formState, setFormState] = useState({
		userName: '',
		favoritePetName: '',
	})
	const { userName, favoritePetName } = formState

	const [showCard, setShowCard] = useState(false)
	const [showAlert, setShowAlert] = useState(false)

	const handleFormData = (event) => {
		const { name, value } = event.target
		setFormState({
			...formState,
			[name]: value,
		})
	}

	const handleReset = () => {
		setFormState({
			userName: '',
			favoritePetName: '',
		})
		setShowCard(false)
		setShowAlert(false)
	}

	const validateForm = () => {
		if (
			userName.includes(' ') ||
			userName.length < 3 ||
			favoritePetName.length < 6
		) {
			return true
		} else {
			return false
		}
	}

	const submitFormData = (event) => {
		event.preventDefault()
		if (!validateForm()) {
			setShowAlert(false)
			setShowCard(!showCard)
		} else {
			setShowAlert(true)
		}
	}

	return (
		<div>
			<div className='form-container'>
				<h1>Dejame Conocerte Mejor</h1>
				<form onSubmit={submitFormData}>
					<div className='input-container'>
						<label htmlFor='user-name'>Como te llamas?</label>
						<input
							id='user-name'
							type='text'
							name='userName'
							value={userName}
							autoComplete='off'
							placeholder='Escribe tu nombre aqui!'
							minLength={3}
							onChange={handleFormData}
						/>
					</div>
					<div className='input-container'>
						<label htmlFor='user-favorite-pet'>
							Cual es tu mascota preferida?
						</label>
						<input
							id='user-favorite-pet'
							type='text'
							name='favoritePetName'
							autoComplete='off'
							value={favoritePetName}
							placeholder='Escribelo aqui!'
							minLength={6}
							onChange={handleFormData}
						/>
					</div>
					<div>
						<button type='submit'>Enviar</button>
						<button onClick={handleReset}>Reset</button>
					</div>
				</form>
			</div>
			<div className='card-container'>
				{showCard && (
					<Card userName={userName} favoritePetName={favoritePetName} />
				)}
				{showAlert && (
					<h3>Por favor chequea que la información sea correcta</h3>
				)}
			</div>
		</div>
	)
}

export default App
