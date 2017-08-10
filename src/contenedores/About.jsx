import React, {Component} from 'react';
import {Col, Row, Button, Input, Card} from 'react-materialize';
import '../css/styleFooter.css'

export default class About extends Component {
  render() {
    return (
        <Row className="center footer">
            <Col s={12}>
                <a href="http://www.softtek.com/"><i className="fa-2x"><img className="logo" src="./img/iconSofttek2.png"/></i></a>
                <a href="https://www.linkedin.com/company/softtek"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
                <a href="https://twitter.com/Softtek"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
                <a href="https://www.facebook.com/softtek"><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></a>
                <a href="https://www.youtube.com/user/SofttekTV"><i className="fa fa-youtube-play fa-2x" aria-hidden="true"></i></a>    
            </Col>
            <Col s={2}/>
            <Col s={8}>
                <br/>
                <hr/>
            </Col>
            <Col s={12}>
                <p>©Copyright Laboratoria</p>
            </Col>
        </Row>
    )
  }
}
