//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card(props) {
	return (
		<div>
			<h1>Hola {props.userName} !</h1>
			<h2>Tu mascota preferida es: {props.favoritePetName}</h2>
		</div>
	)
}

export default Card
