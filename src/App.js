import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import Intro from './components/intro'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <Intro />
          <Intro text="texto para intro2"/>

        </Header>
        
      </div>
    );
  }
}

export default App;
