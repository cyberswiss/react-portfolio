import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from './compo/Cards';
import Navbars from './compo/Navbars';
import Heros from './compo/Heros';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbars/>
        <Heros/>
     
      
      </div>
    );
  }
}

export default App;
