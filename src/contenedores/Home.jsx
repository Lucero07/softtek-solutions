import React, {Component} from 'react';
import {
  Row,
  Col
} from 'react-materialize';
import Detalle from '../componentes/Tarjeta.js';
import Label from '../componentes/LabelPublicaciones.js';


export default class Home extends Component {
  render() {
    return (
      <Row>
        <Col m={3} s={12}>
          <Label titulo= 'Recientes' background='#E8C9D3'/>
          <Detalle/>
          <Detalle/>
          <Detalle/>
        </Col>
        <Col m={3} s={12}>
          <Label titulo= 'Popular' background='#C6D32E'/>
          <Detalle/>
        </Col>
        <Col m={3} s={12}>
          <Label titulo= 'Sugerencias Para ti' background='#E8C9D3'/>
          <Detalle/>
        </Col>
        <Col m={3} s={12}>
          <Label titulo= 'Tus Post' background=' #5F7718'/>
          <Detalle/>
        </Col>

      </Row>
    )
  }
}
