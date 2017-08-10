import React, {Component} from 'react';
import './index.css';
import './App.css';
import {Link, Route} from 'react-router-dom';
import Footer from './contenedores/Footer.js';
import Vista from './contenedores/Vista.jsx';
import Nav from './contenedores/Navegador.js';
import Login from './contenedores/Login.jsx';
import TarjetaPublicacion from './contenedores/TarjetaPublicacion.jsx';
import Detalle from './contenedores/Detalle.js';
import DetalleIdea from './contenedores/DetalleIdea.js';




class App extends Component {
  render() {
    return (
        <div >

          <Nav/>


            <Route exact path="/" component={Login}/>
            <Route path="/vista" component={Vista}/>
            <Route path="/tarjetaPublicacion" component={TarjetaPublicacion}/>
            <Route path="/detalle" component={Detalle}/>
        <Footer/>

        </div>
    );
  }
}

export default App;
