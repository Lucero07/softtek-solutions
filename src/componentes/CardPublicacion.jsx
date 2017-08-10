import React from 'react';
import { Button,Chip, Card, Collection, CollectionItem, Row, Col,} from 'react-materialize';
import '../TarjetaPublicacion.css';
import ModalReto from './ModalReto.jsx';
import {Link} from 'react-router-dom';

export default class CardPublicacion extends React.Component{
    render(){
        return(
            <Card actions={[<Link to='/detalle'><a href='../Detalle'>Ver mas ...</a></Link>]}>
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
                        <Link to='/detalle'><CollectionItem href='../Detalle'>{this.props.reto1}</CollectionItem></Link>
                        <Link to='/detalle'><CollectionItem href='../Detalle'>{this.props.reto2}</CollectionItem></Link>
                        <Link to='/detalle'><CollectionItem href='../Detalle'>{this.props.reto3}</CollectionItem></Link>
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
                            <Link to='/vista'><Chip href='../Vista'>{this.props.tag1}</Chip></Link>
                            <Link to='/vista'><Chip href='../Vista'>{this.props.tag2}</Chip></Link>
                            <Link to='/vista'><Chip href='../Vista'>{this.props.tag3}</Chip></Link>
                            <Link to='/vista'><Chip href='../Vista'>{this.props.tag4}</Chip></Link>
                        </div>
                    </Col>
                </Row>
            </Card>
        )
    }
}
