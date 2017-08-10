import React, {Component} from 'react';
import {
  Row,
  Col
} from 'react-materialize';
import Detalle from '../componentes/Tarjeta.js';
import Label from '../componentes/LabelPublicaciones.js';
import CardPublicacion from '../componentes/CardPublicacion.jsx';


export default class Home extends Component {
  render() {
    return (
      <Row className='margin-row'>
        <Col m={3} s={12}>
          <Label titulo= 'Recientes' background='#E8C9D3' icon='alarm_on'/>
          <Detalle/>
          <CardPublicacion/>
          <Detalle/>
        </Col>
        <Col m={3} s={12}>
          <Label titulo= 'Popular' background='#C6D32E' icon='grade'/>
          <CardPublicacion/>
          <Detalle/>
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
