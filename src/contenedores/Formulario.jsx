import React, {Component} from 'react';
import {Col, Row, Button, Input, Card} from 'react-materialize';

export default class Formulario extends Component {
  render() {
    return (
        <Row className="formularioPublicacion">
            <h4 className="center">Crear Publicación</h4>
            <Col s={2}/>
            <Col s={8}>
                <Col s={12}>
                    <Col s={2}/>
                    <Input s={4} label="Usuario" />
                    <Input s={3} name='group1' type='checkbox' value='red' label='Idea' />
                    <Input s={3} name='group1' type='checkbox' value='red' label='Necesidad' />
                </Col>
                <Col s={12}>
                    <Col s={3}/>
                    <Col s={6}>
                        <textarea placeholder = "Escribir comentario" labe = "Comentario"></textarea>
                    </Col>
                </Col>
                <Col s={12}>
                    <Col s={3}/>
                    <Col s={6}>
                        <textarea placeholder = "Escribir tags" labe = "Tags"></textarea>
                    </Col>
                </Col>
                <Col s={8}/>
                <Button s={2}  waves='light'>Publicar</Button>
            </Col>
        </Row>
        
    )
  }
}
