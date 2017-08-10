import React from 'react';
import { Button, Modal, Chip, Card, Icon, Row, Col } from 'react-materialize';
import '../TarjetaPublicacion.css';
import FormularioReto from './FormularioReto.jsx';

export default class ModalReto extends React.Component{
    render(){
        return(
            <Modal
                header='Nuevo Reto'
                trigger={<Button>Reto</Button>}>
                <Row>
                    <h5>Usuario</h5>
	                <FormularioReto />
                </Row>
            </Modal>
        )
    }
}