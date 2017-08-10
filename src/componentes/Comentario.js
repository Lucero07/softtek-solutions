import React, {Component} from 'react';
import {Card,Col} from 'react-materialize';

export default class Comentario extends Component{
	render (){
		const name =this.props.name;
		return (
			<Col m={6} s={12}>
				<Card className='blue-grey darken-1' textClassName='white-text' title='Card title' actions={[<a href='#'>Autor</a>]}>
				{name}
				</Card>
		</Col>
		)
	}
}
