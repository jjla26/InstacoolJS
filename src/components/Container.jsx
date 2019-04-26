import React from 'react'

const style = {
    backgroundColor: '#ccc',
    height:'100vh',
    width: '100vw',
    padding: '10px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'

}

export default class Container extends React.Component{
    render(){
        return(
            <div style={style}>
                {this.props.children}
            </div>
        )
    }
}