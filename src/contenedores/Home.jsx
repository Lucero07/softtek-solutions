import React, {Component} from 'react';
import {
  Row,
  Col
} from 'react-materialize';
import Detalle from '../componentes/Tarjeta.js';
import Label from '../componentes/LabelPublicaciones.js';
import CardPublicacion from '../componentes/CardPublicacion.jsx';
import CardIdea from '../componentes/CardIdea.js';


export default class Home extends Component {
  render() {
    return (
      <Row className='margin-row'>
        <Col m={3} s={12}>
          <Label titulo= 'Recientes' background='#E8C9D3' icon='alarm_on'/>
          <CardIdea nombreUsuario='Juan Perez' comentario= 'Hoy aprendi a usar React!! Estoy contento!' tag1='React' tag2='ReactJS' tag3='Happiness' likes='2'/>
          <CardPublicacion/>
          <CardIdea nombreUsuario='Sofia Lopez' comentario= 'Alguien conoce algun buen sitio donde aprender a usar frameworks o librerias?' tag1='Cursos' tag2='Librerias' tag3='Framework' likes='5'/>
        </Col>
        <Col m={3} s={12}>
          <Label titulo= 'Popular' background='#C6D32E' icon='grade'/>
          <CardIdea nombreUsuario='CodeCademy' comentario= 'No olviden visitar nustra pagina y sigan aprendiendo con nuestros cursos en linea.' tag1='CursosOnline' tag2='CodeCademy' tag3='latam' likes='45'/>
          <CardPublicacion/>
        </Col>
        <Col m={3} s={12}>
          <Label titulo= 'Sugerencias Para ti' background='#E8C9D3' icon='sentiment_very_satisfied'/>
          <CardPublicacion/>
          <Detalle/>
        </Col>
        <Col m={3} s={12}>
          <Label titulo= 'Tus Post' background=' #5F7718' icon='message'/>
          <Detalle/>
          <CardPublicacion/>
        </Col>

      </Row>
    )
  }
}
