import React, {Component} from 'react';
import {Row, Col} from 'react-materialize';
import CardPublicacion from '../componentes/CardPublicacion.jsx';
import CardIdea from '../componentes/CardIdea.js';
import '../css/styleFiltro.css'

export default class Vista extends Component {
  render() {
    return (
        <Row className = 'fondoResultados'>
            <Col s={3}/>
            <Col s={6}>
                <h2>Resultado para React</h2>
                <CardIdea nombreUsuario = 'Pedro Picapiedra' comentario = 'Es muy fácil crer apps usando React, me lleo sólo unas horas poder hacer una app sencilla.' tag1 = 'react' tag2 = 'app' tag3 = 'proyecto' likes = '5'/>
                <CardPublicacion usuario={"Amarga Malacara"} likes={"3"} descripcion={"Podrian compartirme información sobre talleres de React y NodeJs?"} reto1={"Responsive con uso de Grid"} reto2={"Uso de media queries"} reto3={"Etiqueta meta viewport"} tag1={"responsive"} tag2={"Mobile"} tag3={"react"} tag4={"Design"}/>
                <CardPublicacion usuario={"Lluvia Buendía"} likes={"23"} descripcion={"Asistiré a un hackaton donde usaremos react y probablemente react native, recomiendeneme donde puedo aprender rapido por favor."} reto1={"Realizar peticiones"} reto2={"Documentación"} reto3={"Requerimientos"} tag1={"react"} tag2={"App"} tag3={"JavaScript"} tag4={"Ajax"}/>
                <CardIdea nombreUsuario = 'Talleres de React y más' comentario = 'Pregunten por nuestras promociones' tag1 = 'talleres' tag2 = 'aprende' tag3 = 'React' likes = '2'/>
            </Col>
        </Row>        
    )
  }
}
