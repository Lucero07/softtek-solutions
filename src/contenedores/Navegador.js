import React, {Component} from 'react';
import Home from './Home.jsx';
import {Link, Route} from 'react-router-dom';
import {Button, Row, Col} from 'react-materialize';
import '../Home.css';

export default class Nav extends Component {

  render() {
    return (
      <div>
        <nav>
          <Row className="nav-wrapper background--vino">
            <Col s={2}>
              <Link className='brand-logo ' to="/">Logo</Link>
            </Col>
            <Col s={3} offset='s4'>
              <input type="text"/>
            </Col>
            <Col s={2} >
              <Button className='btn--verde'>publicacion</Button>
            </Col>
            <Col s={1}>
              <img className='foto-perfil' src="https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png" alt=""/>
            </Col>
          </Row>
        </nav>
        <Route exact path="/" component={Home}/>
      </div>
    )
  }
}
