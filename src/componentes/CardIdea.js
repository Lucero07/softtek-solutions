import React, {Component} from 'react';
import {Button, Chip, Card, Row, Col} from 'react-materialize';
import '../TarjetaPublicacion.css';

export default class CardIdea extends Component {
  render() {
    return (
      <Card actions={[< a href = '#' > Ver mas ...</a>]}>
        <Row>
          <h5>{this.props.nombreUsuario}</h5>
          <Col m={7}/>
          <Col m={5}>
            <div className="bordeColor comment-space">Idea</div>
          </Col>
          <div>
              {this.props.comentario}
            </div>
          <Col m={6}></Col>
          <Col m={5}>
            <Button className="botonReto">
              <i className="material-icons">&#xE0BF;</i>
            </Button>
          </Col>
          <Col m={3}>
            <div className="centrarElementos">
              <i className="material-icons">&#xE8DC;</i>
              <span>{this.props.likes}</span>

            </div>
          </Col>
          <Col m={12}>
            <div className="margenTop">
              <Chip>{this.props.tag1}</Chip>
              <Chip>{this.props.tag2}</Chip>
              <Chip>{this.props.tag3}</Chip>
            </div>
          </Col>
        </Row>
      </Card>
    )
  }
}
