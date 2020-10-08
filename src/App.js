import React from 'react';
import './App.css';
import  { Header } from './Components/Header.jsx'

let logoUrl = "https://cdn.worldvectorlogo.com/logos/redux.svg";

const App = () => {
  return ( <div className="App">
    <Header logo={logoUrl} />
  </div> )
};

export default App;
