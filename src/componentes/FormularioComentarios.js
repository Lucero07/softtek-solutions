import React, {Component} from 'react';

export default class FormularioComentario extends Component{
	constructor(props){
		super(props);
		this.state={
			comentario:""
		};

	}
	handleSubmit(e){
		e.preventDefault();
		const comentario = this.state.comentario;
		this.props.agregarComentario(comentario)
	}

	updateState = (e)=>{
		const comentario = e.target.value;
		this.setState({
			comentario:comentario
		});

	}
	render (){
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<input type='text' onChange={this.updateState} />
				<button type='submit'>Publicar</button>
			</form>

		);
	}
}
