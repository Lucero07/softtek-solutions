import React, {Component} from 'react';
import {Card,CardTitle} from 'react-materialize';

export default class Tarjeta extends Component {
  render() {
    return (
		<Card className='small'
			header={<CardTitle image='https://www.filepicker.io/api/file/xwCZZhShQLS247e9uC4D'>React</CardTitle>}
			actions={[<a href='Resumen.jsx'>React-Materialize</a>]}>
			I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
		</Card>

    )
  }
}
