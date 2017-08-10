import React from 'react';
import { Button, Chips, Card, Collection, CollectionItem, Icon, Collapsible, CollapsibleItem, Row, Col } from 'react-materialize';
import '../TarjetaPublicacion.css';
import CardPublicacion from '../componentes/CardPublicacion.jsx'

export default class TarjetaPublicacion extends React.Component{
    render(){
        return(
            <div>
               <Row>
                    <Col m={3} s={12}>
                        <CardPublicacion />
                    </Col>
               </Row>
            </div>
        )
    }
}