import React, {Component} from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom';
import Home from './contenedores/Home.jsx';
import About from './contenedores/About.jsx';
import Vista from './contenedores/Vista.jsx';
import Nav from './contenedores/Navegador.js';

class App extends Component {
  render() {
    return (
      <div className=''>
          <Nav/>
        <div>
          <div>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/vista">Topics</Link>
              </li>
            </ul>

            <hr/>

            <Route path="/about" component={About}/>
            <Route path="/vista" component={Vista}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
