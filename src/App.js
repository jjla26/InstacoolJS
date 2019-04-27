import React, { Component } from 'react';
import './App.css';
import Login from './containers/Auth/Login'
import { Route } from 'react-router'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact={true} path='/' component={Login}/>
        
      </div>
    );
  }
}

export default App;
