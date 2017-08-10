import React from 'react';
import { Button, Modal, Chip, Card, Icon, Row, Col, Input } from 'react-materialize';
import '../TarjetaPublicacion.css';

export default class FormularioReto extends React.Component{
    render(){
        return(
            <div>
                <Input m={6} label="Titulo Reto" validate />
                <input type="text" placeholder="Escribe tu reto" />
                <Input type="submit" value="Crear Reto" />
            </div>
            
        )
    }
}