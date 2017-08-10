import React, {Component} from "react";
import {Col, Row, Button, Card, CardTitle} from "react-materialize";


export default class Login extends Component{
    render(){
        return(
            <Row>
                <Col s={3}/>
                   <Col s={6}>
                       <Card className='small'	header={<CardTitle image='https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png'></CardTitle>}>	
                       
                           <Button href="#">Usuario Autorizado.</Button>
                        </Card>                 
                        <Card className='small'	header={<CardTitle image='https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png'></CardTitle>}>	
                       
                           <Button href="#">Usuario General.</Button>
                        </Card>
                        
                   </Col>
                
                
            </Row>
        )
    }
}
