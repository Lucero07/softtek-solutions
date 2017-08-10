import React, {Component} from 'react';
import {Col, Row, Button, Input} from 'react-materialize';

export default class Formulario extends Component {
  render() {
    return (
        <Row className="formularioPublicacion">
            <h4 className="center">Crear Publicación</h4>
            <Col s={2}/>
            <Col s={8}>
                <Col s={12}>
                    <Input label="Usuario" />
                    <Input name='group1' type='radio' value='red' label='Idea' />
                    <Input name='group1' type='radio' value='red' label='Necesidad' />
                </Col>
                <Col s={12}>
                    <textarea placeholder = "Escribir comentario" labe = "Comentario"></textarea>
                </Col>
                <Col s={12}>
                    <textarea placeholder = "Escribir tags" labe = "Tags"></textarea>
                </Col>
                <Col s={12}>
                    <Button s={2}  className="right" waves='light'>Publicar</Button>
                </Col>
            </Col>
        </Row>

    )
  }
}
