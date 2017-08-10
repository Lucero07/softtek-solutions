import React, {Component} from 'react';

export default class Label  extends Component {
  render(){
    let color = {
      background:this.props.background,
    }

    return(
      <div  style={{background:color.background}} className='padding-label center'>
        <span className='material-icons'>{this.props.icon}</span>
        <h5>{this.props.titulo}</h5>
      </div>
    )
  }
}
