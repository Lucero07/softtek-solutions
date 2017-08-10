import React from 'react';
import { Button,Chip, Card, Collection, CollectionItem, Row, Col,} from 'react-materialize';
import '../TarjetaPublicacion.css';
import ModalReto from './ModalReto.jsx';

export default class CardPublicacion extends React.Component{
    render(){
        return(
            <Card actions={[<a href='#'>Ver mas ...</a>]}>
                <Row>    
                    <h5>{this.props.usuario}</h5>
                    <Col m={6}/>
                    <Col m={6}>
                        <div className="bordeColor">Necesidad</div>
                    </Col>
                    <div>
                        {this.props.descripcion}
                    </div>
                    <Collection>
                        <CollectionItem href='#'>{this.props.reto1}</CollectionItem>
                        <CollectionItem href='#'>{this.props.reto2}</CollectionItem>
                        <CollectionItem href='#'>{this.props.reto3}</CollectionItem>
                    </Collection>
                    <Col m={6}>

                        <ModalReto nombreUsuario={this.props.usuario} />

                    </Col>
                    <Col m={5}>
                        <Button className="botonReto">
                            <i className="material-icons">&#xE0BF;</i>
                        </Button>
                    </Col>
                    <Col m={4}>
                        <div className="centrarElementos">
                            <i className="material-icons">&#xE8DC;</i><span>{this.props.likes}</span>
                        </div>
                    </Col>
                    <Col m={12}>
                        <div className="margenTop">
                            <Chip>{this.props.tag1}</Chip>
                            <Chip>{this.props.tag2}</Chip>
                            <Chip>{this.props.tag3}</Chip>
                            <Chip>{this.props.tag4}</Chip>
                        </div>
                    </Col>
                </Row>
            </Card>
        )
    }
}
