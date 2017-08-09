import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import BasicExample from './contenedores/prueba.js'
import {Link, Route} from 'react-router-dom';
import Home from './contenedores/Home.jsx';
import About from './contenedores/About.jsx';
import Vista from './contenedores/Vista.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
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
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/vista" component={Vista}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
