import React, { Component } from 'react';
import './App.css';
import Login from './containers/Auth/Login'
import Signup from './containers/Auth/Signup'
import Navbar from './components/Navbar'
import Newsfeed from './containers/Newsfeed'
import Profile from './containers/Profile'
import { Route } from 'react-router'
import services from './services'

class App extends Component {

  state = {
    loading: true
  }

  componentDidMount(){
    const { auth } = services
    auth.onAuthStateChanged(user => {
      console.log(user)
      this.setState({loading: false})

      }
    )
  }

  render() {
    const { loading } = this.state
    return (
      loading ? 'loading' :
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
