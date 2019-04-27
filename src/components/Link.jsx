import React from 'react'

const style = {
color:'blue',
fontSize: '14px',
padding: '10px'
}

export default class Card extends React.Component{
    render(){
        const { children } = this.props

        return(
            <a {...this.props} style={style}/>
        )
    }
}