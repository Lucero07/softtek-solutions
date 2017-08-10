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
          <Label/>
          <Detalle/>
          <Detalle/>
          <Detalle/>
        </Col>
        <Col m={3} s={12}>
          <Detalle/>
        </Col>
        <Col m={3} s={12}>
          <Detalle/>
        </Col>
        <Col m={3} s={12}>
          <Detalle/>
        </Col>

      </Row>
    )
  }
}
