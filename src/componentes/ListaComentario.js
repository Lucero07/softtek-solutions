import React,{Component} from 'react';
import Comentario from './Comentario';

export default class ListaComentarios extends Component{
		render (){
			const listaComentarios =this.props.comentarios;

			return (
					<ul>
						{listaComentarios.map((item,i)=><Comentario key={i}  name={item}/>)}
					</ul>
			)
		}
	}
