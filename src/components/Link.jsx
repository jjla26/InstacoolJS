import React from 'react'

const style = {
color:'blue',
fontSize: '14px',
padding: '10px'
}

export default class Link extends React.Component{
    render(){
        const { children } = this.props

        return(
            <a {...this.props} style={style}/>
        )
    }
}