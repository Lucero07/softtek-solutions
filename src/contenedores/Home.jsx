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
      <Row>
        <Col m={3} s={12}>
          <Label titulo= 'Recientes' background='#E8C9D3'/>
          <Detalle/>
          <CardPublicacion usuario={ "Laura Leon" } likes={"15"} descripcion={"¿Cómo puedo transformar mi sitio web en Responsive?"} reto1={"Responsive con uso de Grid"} reto2={"Uso de media queries"} reto3={"Etiqueta meta viewport"} tag1={"responsive"} tag2={"Mobile"} tag3={"grid"} tag4={"Design"}/>
          <Detalle/>
        </Col>
        <Col m={3} s={12}>
          <Label titulo= 'Popular' background='#C6D32E'/>
          <CardPublicacion usuario={ "David Lee" } likes={"267"} descripcion={"¿Cómo usar Bootstrap en una aplicacion web?"} reto1={"Instalar el framework"} reto2={"Uso de documentación"} reto3={"Usa CDN"} tag1={"Frameworks"} tag2={"Bootstrap"} tag3={"css"} tag4={"web"}/>
          <Detalle/>
        </Col>
        <Col m={3} s={12}>
          <Label titulo= 'Sugerencias Para ti' background='#E8C9D3'/>
          <CardPublicacion usuario={ "Raquel Oteo" } likes={"23"} descripcion={"¿Quisiera saber cómo puedo utilizar un API en mi app?"} reto1={"Realizar peticiones"} reto2={"Documentación"} reto3={"Requerimientos"} tag1={"API's"} tag2={"App"} tag3={"JavaScript"} tag4={"Ajax"}/>
          <Detalle/>
        </Col>
        <Col m={3} s={12}>
          <Label titulo= 'Tus Post' background=' #5F7718'/>
          <Detalle/>
          <CardPublicacion usuario={ "Melisa Rios" } likes={"12"} descripcion={"¿Cómo validar un correo electronico?"} reto1={"Validaciones"} reto2={"Funciones regulares"} reto3={"Condicionales"} tag1={"Email"} tag2={"validar"} tag3={"jQuery"} tag4={"code"}/>
        </Col>

      </Row>
    )
  }
}
