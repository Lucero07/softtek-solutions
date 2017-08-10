import React, {Component} from 'react';
import {Row,Col} from 'react-materialize'
import Tarjeta from '../componentes/Tarjeta.js';
import Publicaciones from './PublicarComentario';

export default class Detalle extends Component {
  render() {
    return (
		<Row>
			<Col s={1}/>
		 	<Col s={10}>

				<Tarjeta s={12}/>
				<Col s={6}>
				<Publicaciones/>
				</Col>
				<Col s={6}>
				sdgasty
				</Col>

			</Col>
		</Row>
    )
  }
}
