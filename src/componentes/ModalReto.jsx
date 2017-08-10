import React from 'react';
import { Button, Modal,Row } from 'react-materialize';
import '../TarjetaPublicacion.css';
import FormularioReto from './FormularioReto.jsx';

export default class ModalReto extends React.Component{
    render(){
        return(
            <Modal
                trigger={<Button className="botonReto">Reto</Button>}>
                <Row>
                    <h5>{this.props.nombreUsuario}</h5>
	                <FormularioReto />
                </Row>
            </Modal>
        )
    }
}
