import React from 'react'

const style = {
    color:'#555',

}

export default class Title extends React.Component{
    render(){
        const {children} = this.props
        return(
            <h2 style={style} {...this.props}>{children}</h2>            
        )
    }
}