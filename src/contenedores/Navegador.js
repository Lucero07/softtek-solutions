import React, {Component} from 'react';
import Home from './Home.jsx';
import {Link, Route} from 'react-router-dom';
import {Button} from 'react-materialize';
export default class Nav extends Component {

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
              <Link className='brand-logo left' to="/">Logo</Link>
            <ul id="nav-mobile" className="right">
              <li>
                <input type="text"/>
              </li>
              <li>
                <Button> Crear publicacion</Button>
              </li>
              <li>
                <img src="https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png" alt=""/>
              </li>
            </ul>
          </div>
        </nav>
        <Route exact path="/" component={Home}/>
      </div>
    )
  }
}
