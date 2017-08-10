import React, {Component} from 'react';
import {Card,CardTitle} from 'react-materialize';

export default class Comentarios extends Component {
	constructor(props){
  		super(props);
  	}
  	render(){
  		const nombre = this.props.nombre;
  		const status = this.props.status;
  		return(
  			<div>
  			{/*Crea elementos por cada todo*/}
  				{
  					(status === 'done')?
  					<input type='checkbox' checked disabled/> :
  					<input type='checkbox'/>}
  				<label>{nombre}</label>
  			</div>
  		)
  	}
  }
