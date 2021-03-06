import React, {Component} from 'react';
import {Row,Col} from 'react-materialize'
import Tarjeta from '../componentes/Tarjeta.js';
import Publicaciones from './PublicarComentario';
import Grafica from '../assets/img/grafica.svg';
import Likes from '../assets/img/likeUbicacion.svg';
import Mapa from '../assets/img/mapa.svg';
import '../index.css';

export default class Detalle extends Component {
  render() {
    return (
		<Row>
			<Col offset='s1'/>
		 	<Col s={10}>
				<Tarjeta s={12}/>
				<Col s={6}>
				<Publicaciones/>
				</Col>

        <Col m={4} offset='m1'  s={12} className='mt'>
          <div className='borde'>
            <img src={Grafica} alt="grafica"/>
          </div>

          <div className='borde'>
            <img src={Likes} alt="likes"/>
          </div>

          <div className='borde'>
            <img src={Mapa} alt="mapa"/>
          </div>
        </Col>


			</Col>
		</Row>
    )
  }
}
