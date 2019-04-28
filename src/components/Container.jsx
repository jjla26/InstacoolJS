import React from 'react'

const style = (center) => ({
    backgroundColor: '#ccc',
    height:'100vh',
    width: '100vw',
    padding: '10px 10px',
    display: 'flex',
    alignItems: center ? 'center' : undefined,
    justifyContent: center ? 'center' : undefined

})

export default class Container extends React.Component{
    render(){
        const { center = false } = this.props
        return(
            <div style={style(center)}>
                {this.props.children}
            </div>
        )
    }
}