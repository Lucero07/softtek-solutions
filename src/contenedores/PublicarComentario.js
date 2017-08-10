import React,{Component} from 'react';
import FormularioComentario from '../componentes/FormularioComentarios';
import ListaComentarios from '../componentes/ListaComentario';

class PublicarComentarios extends Component{

	constructor(props){
		super(props);
		this.state = {
			comentarios:[]
		};
		this.onSubmitHandler = this.onSubmitHandler.bind(this);
	}

	onSubmitHandler(e){
		e.preventDefault();
		const name =e.target.children[0].value;
		const status = 'pending';
		const comentario = {name,status};
		let comentarios = this.state.comentarios;
		comentarios.push(comentario);

console.log(comentarios);
		this.setState({
			comentarios
		});
	}

	render(){
		return(
			<div>
				<h1>Lista de comentarios</h1>
				<FormularioComentario onSubmitHandler={this.onSubmitHandler} />
				<ListaComentarios comentarios ={this.state.comentarios} />
			</div>
		);
	}
}

export default PublicarComentarios;
