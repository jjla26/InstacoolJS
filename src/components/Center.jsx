import React from 'react'

const style = {
    textAlign: 'center',
    width: '100%',
    
}

export default class Center extends React.Component{
    render(){

        return(
            <div {...this.props} style={style}/>
        )
    }
}