import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import Nav from './Navegador.js';
import Footer from './Footer.js';
import Home from './Home,jsx'
import TarjetaPublicacion from './TarjetaPublicacion.jsx';
import Detalle from './Detalle.js';


class Inicio extends Component {
  render() {
    return (
        <div className=''>

          <Nav/>

          <Home/>
          <Footer/>





            <Route path="/tarjetaPublicacion" component={TarjetaPublicacion}/>
            <Route path="/detalle" component={Detalle}/>
        </div>
    );
  }
}


export default Inicio;
