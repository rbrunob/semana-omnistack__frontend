import React from 'react';
import './App.css';

import logo from './assets/logo.svg'


function App() {
  return (
   <div className="container">
     <img src={logo} alt="Aircnc"/>
     <p>
       Ofereças <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para a sua empresa
     </p>
   </div>
  );
}

export default App;
