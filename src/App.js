import React, { Component } from 'react';
import './App.css';
import * as Header from '/components/header'
import * as Intro from '/components/intro'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <Intro/>
        </Header>
        
      </div>
    );
  }
}

export default App;
