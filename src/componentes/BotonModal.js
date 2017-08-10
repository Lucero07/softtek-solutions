import React, {Component} from 'react';
import {Row,Button, Modal} from 'react-materialize';
import Formulario from '../contenedores/Formulario.jsx';

export default class BotonModal extends Component {
  render() {
    return (
      <Modal
          trigger={<Button className= 'btn--verde'> Publicar</Button>}>
          <Row>

            <Formulario />
          </Row>
      </Modal>
    )
  }
}
