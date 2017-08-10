import React, {Component} from 'react';
import {Col, Row} from 'react-materialize';
import '../css/styleFooter.css'
import logo from '../assets/img/iconSofttek2.png';

export default class Footer extends Component {
  render() {
    return (
      <div className="center footer">
        <Row>
          <Col s={12}>
            <a href="http://www.softtek.com/" className=' btn-floating  waves-effect btn-large btn-logo white'>
              <span><img className="logo" src={logo} alt='logo'/></span>
            </a>
            <a href="https://www.linkedin.com/company/softtek" className='tooltipped btn-floating  waves-effect btn-large btn'>
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="https://twitter.com/Softtek" className='tooltipped btn-floating  waves-effect btn-large btn'>
              <i className="fa fa-twitter " aria-hidden="true"></i>
            </a>
            <a href="https://www.facebook.com/softtek" className='tooltipped btn-floating  waves-effect btn-large btn'>
              <i className="fa fa-facebook "></i>
            </a>
            <a href="https://www.youtube.com/user/SofttekTV" className='tooltipped btn-floating  waves-effect btn-large btn'>
              <i className="fa fa-youtube-play " aria-hidden="true"></i>
            </a>
          </Col>
        </Row>
        <br/>
        <footer className='mt'>
          <Row>
            <Col s={12}>
              <p>©Copyright Laboratoria</p>
            </Col>
          </Row>
        </footer>
      </div>
    )
  }
}
