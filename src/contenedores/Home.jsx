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
         
          <CardIdea nombreUsuario='Sofia Lopez' comentario= 'Alguien conoce algun buen sitio donde aprender a usar frameworks o librerias?' tag1='Cursos' tag2='Librerias' tag3='Framework' likes='5'/>
        </Col>
        <Col m={3} s={12}>
          <Label titulo= 'Popular' background='#C6D32E' icon='grade'/>
          <CardIdea nombreUsuario='CodeCademy' comentario= 'No olviden visitar nustra pagina y sigan aprendiendo con nuestros cursos en linea.' tag1='CursosOnline' tag2='CodeCademy' tag3='latam' likes='45'/>
          

          
          <CardPublicacion usuario={ "Laura Leon" } likes={"15"} descripcion={"¿Cómo puedo transformar mi sitio web en Responsive?"} reto1={"Responsive con uso de Grid"} reto2={"Uso de media queries"} reto3={"Etiqueta meta viewport"} tag1={"responsive"} tag2={"Mobile"} tag3={"grid"} tag4={"Design"}/>
          <Detalle/>
        </Col>
        <Col m={3} s={12}>
          <Label titulo= 'Popular' background='#C6D32E' icon='grade'/>
          <CardPublicacion usuario={ "David Lee" } likes={"267"} descripcion={"¿Cómo usar Bootstrap en una aplicacion web?"} reto1={"Instalar el framework"} reto2={"Uso de documentación"} reto3={"Usa CDN"} tag1={"Frameworks"} tag2={"Bootstrap"} tag3={"css"} tag4={"web"}/>
          <Detalle/>

        </Col>
        <Col m={3} s={12}>
          <Label titulo= 'Sugerencias Para ti' background='#E8C9D3' icon='sentiment_very_satisfied'/>
          <CardPublicacion usuario={ "Raquel Oteo" } likes={"23"} descripcion={"¿Quisiera saber cómo puedo utilizar un API en mi app?"} reto1={"Realizar peticiones"} reto2={"Documentación"} reto3={"Requerimientos"} tag1={"API's"} tag2={"App"} tag3={"JavaScript"} tag4={"Ajax"}/>
          <Detalle/>
        </Col>
        <Col m={3} s={12}>
          <Label titulo= 'Tus Post' background=' #5F7718' icon='message'/>
          <Detalle/>
          <CardPublicacion usuario={ "Melisa Rios" } likes={"12"} descripcion={"¿Cómo validar un correo electronico?"} reto1={"Validaciones"} reto2={"Funciones regulares"} reto3={"Condicionales"} tag1={"Email"} tag2={"validar"} tag3={"jQuery"} tag4={"code"}/>
        </Col>

      </Row>
    )
  }
}
