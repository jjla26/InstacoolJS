import React from 'react'

const style = {
    color:'#555',

}

export default class Title extends React.Component{
    render(){
         return(
            <h2 style={style} {...this.props} />            
        )
    }
}