import React from 'react';
import './App.css';
import  { Header } from './Components/Header/Header.jsx';
import { Home } from './Components/Home/Home.jsx';
import { About } from './Components/About/About.jsx';
import { Settings } from './Components/Settings/Settings.jsx';
import { ToDo } from './Components/ToDo/ToDo.jsx';
import { Route, BrowserRouter } from "react-router-dom";

let logoUrl = "https://cdn.worldvectorlogo.com/logos/redux.svg";

const App = () => {
  return ( <BrowserRouter>
    <div className="App">
      <Header logo={logoUrl} />
      <div className="App__footer">
        <Route path='/Home' component={Home} />
        <Route path='/About' component={About} />
        <Route path='/ToDo' component={ToDo} />
        <Route path='/Settings' component={Settings} />
      </div>
    </div>
    </BrowserRouter> )
};

export default App;