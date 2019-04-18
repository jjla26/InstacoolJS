import * as React from 'react'
import logo from '../logo.svg';


export default class Intro extends React.Component{
    state= {
        text: "hola soy el estado!"
    }

    handleClick = () => {
        console.log("asd")
        this.setState({ text:"Actualizado"})
    }


    render(){
        const { text } = this.props
        const t = text ? text : this.state.text
        return(
            <div>
                <img src={logo} className="App-logo" alt="logo" />
                <p onClick={this.handleClick}>
                 {t}
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