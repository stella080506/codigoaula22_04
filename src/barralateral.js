import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o CSS do Bootstrap
import './App.css';
/* import Logo from '../src/logoo.png'; */

const BarraLateral = (props) => {
    return (
        <div className="sidenav">
            <button onClick={props.closeNav}>X</button>
            <a href="#section">About</a>
            <a href="#section">Services</a>
            <a href="#section">Clientes</a>
            <a href="#section">Contact</a>
        </div>
    );
};
<div class="position-relative">
  <div class="position-absolute top-0 start-0"></div>
  </div>
export default BarraLateral;