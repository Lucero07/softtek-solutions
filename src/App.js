import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {Link, Route} from 'react-router-dom';
import Home from './contenedores/Home.jsx';
import About from './contenedores/About.jsx';
import Vista from './contenedores/Vista.jsx';
import Nav from './contenedores/Navegador.js';
import Detalle from './contenedores/Detalle.js';

class App extends Component {
  render() {
    return (
      <div className=''>

        <div>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/vista">Topics</Link>
              </li>
			  <li>
                <Link to="/detalle">Detalle</Link>
              </li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/vista" component={Vista}/>
			<Route path="/detalle" component={Detalle}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
