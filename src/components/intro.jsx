import * as React from 'react'
import logo from '../logo.svg';


export default class Intro extends React.Component{
    render(){
        const { text } = this.props
        return(
            <div>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                 {text}
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </div>
        )
    }
}