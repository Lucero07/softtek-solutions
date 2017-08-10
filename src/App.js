import React, {Component} from 'react';
import './index.css';
import './App.css';
import {Link, Route} from 'react-router-dom';
import About from './contenedores/About.jsx';
import Vista from './contenedores/Vista.jsx';
import Nav from './contenedores/Navegador.js';
import Login from './contenedores/Login.jsx';
import TarjetaPublicacion from './contenedores/TarjetaPublicacion.jsx';
import Detalle from './contenedores/Detalle.js';
import Home from './contenedores/Home.jsx';



class App extends Component {
  render() {
    return (
        <div className=''>

          <Nav/>

            <ul>
              <li>
                <Link to='/home'>HOme</Link>
              </li>
                <li>
                <Link to="/">Login</Link>
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
                <li>
                <Link to="/tarjetaPublicacion">Publicacion</Link>
                </li>

            </ul>

            <hr/>



            <Route path="/home" component={Home}/>
            <Route exact path="/" component={Login}/>
            <Route path="/about" component={About}/>
            <Route path="/vista" component={Vista}/>
            <Route path="/tarjetaPublicacion" component={TarjetaPublicacion}/>
            <Route path="/detalle" component={Detalle}/>
        </div>
    );
  }
}

export default App;
