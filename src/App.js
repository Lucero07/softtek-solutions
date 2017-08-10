import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import BasicExample from './contenedores/prueba.js'
import {Link, Route} from 'react-router-dom';
import Home from './contenedores/Home.jsx';
import About from './contenedores/About.jsx';
import Vista from './contenedores/Vista.jsx';
import Nav from './contenedores/Navegador.js';
import Login from './contenedores/Login.jsx';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Login/>
            
        </div>
    );
  }
}

export default App;
