import React from 'react';
import { Button, Chips, Card, Collection, CollectionItem, Icon, Collapsible, CollapsibleItem, Row, Col } from 'react-materialize';
import '../TarjetaPublicacion.css';

export default class TarjetaPublicacion extends React.Component{
    render(){
        return(
            <div>
               <Row>
                    <Col m={3} s={12}>
                        <Card title='Tarjeta Publicacion' actions={[<a href='#'>Ver mas ...</a>]}>
                            <Row>
                                <Col m={12}>
                                    <h5>Nombre Usuario</h5>
                                </Col>
                                <Col m={12}>
                                    <div>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga itaque facere neque ad est delectus explicabo, similique illum laborum ut quam enim asperiores excepturi perferendis dolorum dolores ea tenetur ipsam?
                                    </div>
                                </Col>
                                <Col m={12}>
                                    <Collection>
                                        <CollectionItem href='#'>Reto 1</CollectionItem>
                                        <CollectionItem href='#'>Reto 2</CollectionItem>
                                        <CollectionItem href='#'>Reto 3</CollectionItem>
                                    </Collection>
                                </Col>
                                <Col m={6}>
                                    <Button className="botonReto">
                                        +Reto
                                    </Button>
                                </Col>
                                <Col m={4}>
                                    <Button>
                                        <i className="material-icons">&#xE8DC;</i>
                                    </Button>
                                </Col>
                                <Col m={10}>
                                    <Collapsible popout>
                                        <CollapsibleItem header='First' icon='filter_drama'>
                                            Comentar
                                        </CollapsibleItem>
                                    </Collapsible>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
               </Row>
            </div>
        )
    }
}
