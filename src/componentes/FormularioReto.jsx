import React from 'react';
import { Button,Input } from 'react-materialize';
import '../TarjetaPublicacion.css';

export default class FormularioReto extends React.Component{
    render(){
        return(
            <div>
                <Input m={12} label="Titulo Reto" />
                <Input m={12} type="text" placeholder="Escribe tu reto" />
                <Button className="botonReto" type="submit">
                    Crear Reto
                </Button>
            </div>

        )
    }
}
