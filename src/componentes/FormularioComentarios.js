import React, {Component} from 'react';

export default class FormularioComentario extends Component{
	render(){
		return(
			<form onSubmit={this.props.onSubmitHandler}>
				<textarea placeholder='Escribe tu comentario'></textarea>
				<button type='submit'>Publicar</button>
			</form>
		)
	}
}
