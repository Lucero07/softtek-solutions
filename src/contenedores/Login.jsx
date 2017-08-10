import React, {Component} from "react";
import {Col, Row, Button} from "react-materialize";
import "../Login.css"


export default class Login extends Component{
    render(){
        return(
            <Row>
                <Col s={3}/>
                   <Col s={6}>
                        <div className="marginUser center">
                            <div className="center">
                                <img className="imgUserHeight" src="https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png" alt="#"/>

                            </div>

                            <Button  href="#">Usuario Autorizado</Button>
                        </div>

                        <div className="marginUser center">
                            <div className="center">
                                <img className="imgUserHeight" src="https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png" alt="#"/>

                            </div>

                            <Button href="#">Usuario General</Button>
                        </div>
                   </Col>


            </Row>
        )
    }
}
