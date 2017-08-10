import React,{Component} from 'react';
import firebase from 'firebase';
import FormularioComentario from '../componentes/FormularioComentarios';
import ListaComentarios from '../componentes/ListaComentario';

class Publicaciones extends Component {
	constructor(props){
		super(props);
		this.state={
			listaactual:[]
		};
	}

	componentDidMount(){
		const config = {
	      apiKey: "AIzaSyC06RbfBZIekb0-HCZU6QY-fjJElxOO-Uo",
	      authDomain: "softtek-solutions.firebaseapp.com",
	      databaseURL: "https://softtek-solutions.firebaseio.com",
	      projectId: "softtek-solutions",
	      storageBucket: "",
	      messagingSenderId: "1006828872754"
	    };


	const app= firebase.initializeApp(config);
	this.database = app.database();

const comentariosBaseDatos = this.database.ref('listaFinal');
	comentariosBaseDatos.on('value',(respuesta)=> {

	const listaComent = respuesta.val();
			console.log(listaComent);
		this.setState({
			listaactual:listaComent.comentarios
		})

	});
	}

	guardarLista(comentarios){
		const comentariosBaseDatos = this.database.ref('listaFinal');
	//escribe en la base de datos
		comentariosBaseDatos.set({
			comentarios:comentarios
		});
	}


	agregarComentario = (comentario)=>{
		let listaComentario = this.state.listaactual;
		listaComentario.unshift(comentario);
		this.setState({
			listaactual:listaComentario
		});
		this.guardarLista(listaComentario);
	}

  render() {
	  const comentarios = this.state.listaactual;
    return (
      <div>
	  	<h1>Publicaciones</h1>
		<FormularioComentario agregarComentario={this.agregarComentario}/>
		<ListaComentarios comentarios = {comentarios}/>
      </div>
    );
  }
}

export default Publicaciones;
