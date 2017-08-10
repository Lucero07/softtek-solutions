import React, {Component} from 'react';
import Home from './Home.jsx';
import Formulario from './Formulario.jsx';
import {Link, Route} from 'react-router-dom';
import {Button, Row, Col} from 'react-materialize';
import '../Home.css';
import logo from '../assets/img/logoSofttek.png';

export default class Nav extends Component {

  render() {
    return (
      <div>
        <nav className='nav--height'>
          <Row className="nav-wrapper background--vino">
            <Col m={2} s={2}>
              <Link className='brand-logo ' to="/"><img className='img-logo' src={logo} alt=""/></Link>
            </Col>
            <Col s={3} offset='s4'>
                <input id="icon_prefix" type="text" className="border"/>
            </Col>
            <Col s={2}>
              <Button className='btn--verde'>
                <Link to="/Formulario">publicacion</Link>
              </Button>
            </Col>
            <Col s={1}>
              <img className='foto-perfil responsive-img' src="https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png" alt=""/>
            </Col>
          </Row>
        </nav>
        <Route exact path="/" component={Home}/>
        <Route path="/Formulario" component={Formulario}/>
      </div>
    )
  }
}
