import React, {Component} from 'react';
import Home from './Home.jsx';
import {Link, Route} from 'react-router-dom';
import {Row, Col} from 'react-materialize';
import '../Home.css';
import logo from '../assets/img/logo.png';
import BotonModal from '../componentes/BotonModal.js'

export default class Nav extends Component {

  render() {
    return (
      <div>
        <nav className='nav--height'>
          <Row className="nav-wrapper background--negro">
            <Col m={2} s={2}>
              <Link className='brand-logo ' to="/home"><img className='img-logo' src={logo} alt=""/></Link>
            </Col>
            <Col s={1} offset='s3'>
              <i className='material-icons search'>search</i>
            </Col>
            <Col s={3}>
              <input id="icon_prefix" type="text"/>
            </Col>
            <Col s={2}>
                <BotonModal/>

            </Col>
            <Col s={1}>
              <img className='foto-perfil responsive-img' src="https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png" alt=""/>
            </Col>
          </Row>
        </nav>
        <Route  path="/home" component={Home}/>
      </div>
    )
  }
}
