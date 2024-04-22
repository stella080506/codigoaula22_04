import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o CSS do Bootstrap
import './App.css';
import Logo from '../src/logoo.png';

function Navbar() {
  return (
    <nav class="menu">

        <div class="logo">
            <img src={Logo} class="d-block w-100" alt="..."></img> 
        </div>

        <div class='nav'>
            <nav class="navbar navbar-expand-lg navegaçao">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0"> 
                    <li class="nav-item">     
                        <a class="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Mais opções
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="quemsomos.html">Quem somos</a></li>
                        <li><a class="dropdown-item" href="faleconosco.html">Fale conosco</a></li>
                        <li>class="dropdown-divider"</li>
                        <li><a class="dropdown-item" href="#">Perfil</a></li>
                    </ul>
                    </li>
                </ul>

                <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Search"></input>
                        <button class="btn btn-outline-success" type="submit">Procurar</button>
                </form>
            </div>
            </nav>
        </div>
        
    </nav>
        );
}   
export default Navbar;