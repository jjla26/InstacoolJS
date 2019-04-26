import React from 'react'

const style = {
    backgroundColor: '#FFF',
    padding:'10px 10px',
    border:'1px solid #eee',
}

export default class Card extends React.Component{
    render(){
        const { children } = this.props

        return(
            <div style={style}>
                {children}
            </div>
        )
    }
}