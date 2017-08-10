import React, {Component} from 'react';
import {Button, Chip, Card, Row, Col} from 'react-materialize';
import '../TarjetaPublicacion.css';
import {Link} from 'react-router-dom';

export default class CardIdea extends Component {
  render() {
    return (
      <Card actions={[<Link to='/detalleIdea'><a href ='../contenedores/DetalleIdea' > Ver mas ...</a></Link>]}>
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
              <Link to='/vista'><Chip href='../Vista'>{this.props.tag1}</Chip></Link>
              <Link to='/vista'><Chip href='../Vista'>{this.props.tag2}</Chip></Link>
              <Link to='/vista'><Chip href='../Vista'>{this.props.tag3}</Chip></Link>
            </div>
          </Col>
        </Row>
      </Card>
    )
  }
}
