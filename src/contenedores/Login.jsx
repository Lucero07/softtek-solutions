import React, {Component} from "react";
import {Col, Row, Button} from "react-materialize";
import "../Login.css"
import {Link} from 'react-router-dom';



export default class Login extends Component{
    render(){
        return(
            <Row>
                <Col s={2}/>
                   <Col s={4}>
                        <div className="marginUser center">
                            <div className="center">
                                <img className="imgUserHeight" src="https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png" alt="#"/>

                            </div>


                            <Link to='/home'><Button href="#">Usuario Autorizado</Button></Link>

                        </div>
                    </Col>
                    
                        
                    
                    <Col s={4}>
                        <div className="marginUser center">
                            <div className="center">
                                <img className="imgUserHeight" src="https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png" alt="#"/>


                            </div>

                            <Link to='/home'><Button href="#">Usuario General</Button></Link>
                            </div>
                    </Col>
            </Row>
        )
    }
}
