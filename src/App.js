import React, { Component } from 'react';
import './App.css';
import Login from './containers/Auth/Login'
import Signup from './containers/Auth/Signup'
import { Route } from 'react-router'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact={true} path='/' component={Login}/>
        <Route exact={true} path='/registro' component={Signup}/>
      </div>
    );
  }
}

export default App;
