import React from 'react'

const style = (block) => ({
    border: '0px',
    borderRadius: '5px',
    color: '#fff',
    backgroundColor: '#00D182',
    padding: '10px',
    marginTop: '10px',
    width: block ? '100%' : undefined

})

export default class Button extends React.Component{
    render(){
        const { children, block = false} = this.props
        return(
            <button {...this.props} style={style(block)}>
                {children}
            </button>
        )
    }
}