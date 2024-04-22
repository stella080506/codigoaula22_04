import './App.css';
import React from 'react';
import Navbar from './Navbar.js'; // Importe o componente Navbar
import Chat from './chat';


function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Chat />
    </div>
  );
}

export default App;

/* import React, { useState } from 'react';
import SideNav from './SideNav'; // Importe o componente SideNav

const App = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div className="app">
            <button onClick={toggleNav}>Abrir Barra Lateral</button>
            {isNavOpen && <SideNav closeNav={toggleNav} />}
            {/* Renderize a barra lateral somente se isNavOpen for verdadeiro }
            {/* Resto do conteúdo do seu aplicativo }
        /* </div>
    );
};

export default App; */
