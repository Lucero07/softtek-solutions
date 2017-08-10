import React, {Component} from 'react';
import {Row, Col} from 'react-materialize';
import CardIdea from '../componentes/CardIdea.js';
import Grafica from '../assets/img/grafica.svg';
import Likes from '../assets/img/likeUbicacion.svg';
import Mapa from '../assets/img/mapa.svg';
import Publicaciones from './PublicarComentario';
import '../index.css';
import {Link} from 'react-router-dom';

export default class DetalleIdea extends Component {
  render() {
    return (

      <Row >
        <Col m={5} offset="m1" s={12}>
          <CardIdea nombreUsuario='CodeCademy' comentario='No olviden visitar nustra pagina y sigan aprendiendo con nuestros cursos en linea.' tag1='CursosOnline' tag2='CodeCademy' tag3='latam' likes='45'/>
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
      </Row>
    )
  }
}
