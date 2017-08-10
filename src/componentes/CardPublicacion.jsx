import React from 'react';
import { Button, Chips, Card, Collection, CollectionItem, Icon, Collapsible, CollapsibleItem, Row, Col } from 'react-materialize';
import '../TarjetaPublicacion.css';

export default class CardPublicacion extends React.Component{
    render(){
        return(
            <Card title='Tarjeta Publicacion' actions={[<a href='#'>Ver mas ...</a>]}>
                <Row>
                    <h5>Nombre Usuario</h5>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga itaque facere neque ad est delectus explicabo, similique illum laborum ut quam enim asperiores excepturi perferendis dolorum dolores ea tenetur ipsam?
                    </div>
                    <Collection>
                        <CollectionItem href='#'>Reto 1</CollectionItem>
                        <CollectionItem href='#'>Reto 2</CollectionItem>
                        <CollectionItem href='#'>Reto 3</CollectionItem>
                    </Collection>
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
        )
    }
}