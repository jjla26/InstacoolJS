import React, { Component } from 'react';
import './App.css';
import Login from './containers/Auth/Login'
import Signup from './containers/Auth/Signup'
import Navbar from './components/Navbar'
import Newsfeed from './containers/Newsfeed'
import Profile from './containers/Profile'

import { Route } from 'react-router'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact={true} path='/' component={Login}/>
        <Route exact={true} path='/registro' component={Signup}/>
        <Route path ='/app' component={Navbar} />
        <Route exact={true} path='/app/newsfeed' component={Newsfeed}/>
        <Route exact={true} path='/app/profile' component={Profile}/>

      </div>
    );
  }
}

export default App;
