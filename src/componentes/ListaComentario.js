import React,{Component} from 'react';
import Comentario from './Comentario';

export default class ListaComentarios extends Component{
	render(){
		const comentarios =this.props.comentarios;
		return(
			<div>
				{
					comentarios.map((comentario,i) =>{
						return <Comentario key={i} name= {comentario.name} status={comentario.status} />;
					})
				}
			</div>
		)
	}
}
