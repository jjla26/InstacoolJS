import React from 'react'

const style = {
    border: '0px',
    borderRadius: '5px',
    color: '#fff',
    backgroundColor: '#00D182',
    padding: '10px',
    marginTop: '10px'

}

export default class Button extends React.Component{
    render(){
        const { children } = this.props
        return(
            <button {...this.props} style={style}>
                {children}
            </button>
        )
    }
}