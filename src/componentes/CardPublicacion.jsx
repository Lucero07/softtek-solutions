import React from 'react';
import { Button,Chip, Card, Collection, CollectionItem, Row, Col,} from 'react-materialize';
import '../TarjetaPublicacion.css';
import ModalReto from './ModalReto.jsx';

export default class CardPublicacion extends React.Component{
    render(){
        return(
            <Card actions={[<a href='#'>Ver mas ...</a>]}>
                <Row>
                    <h5>Nombre Usuario</h5>
                    <Col m={7}/>
                    <Col m={5}>
                        <div className="bordeColor">Necesidad</div>
                    </Col>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga itaque facere neque ad est delectus explicabo, similique illum laborum ut quam enim asperiores excepturi perferendis dolorum dolores ea tenetur ipsam?
                    </div>
                    <Collection>
                        <CollectionItem href='#'>Reto 1</CollectionItem>
                        <CollectionItem href='#'>Reto 2</CollectionItem>
                        <CollectionItem href='#'>Reto 3</CollectionItem>
                    </Collection>
                    <Col m={6}>
                        
                    </Col>
                    <Col m={5}>
                        <Button className="botonReto">
                            <i className="material-icons">&#xE0BF;</i>
                        </Button>
                    </Col>
                    <Col m={3}>
                        <div className="centrarElementos">
                            <i className="material-icons">&#xE8DC;</i><span>12</span>

                        </div>
                    </Col>
                    <Col m={12}>
                        <div className="margenTop">
                            <Chip>tag</Chip>
                            <Chip>tag</Chip>
                            <Chip>tag</Chip>
                            <Chip>tag</Chip>
                        </div>
                    </Col>
                </Row>
            </Card>
        )
    }
}
