import React from 'react'


const style = {
    img:{
        borderRadius: '100%'
    }

    
}

export default class Post extends React.Component{
    render(){
        const { image } = this.props
        return(
            <div>
                <img style={style.img} alt="" src={image} />
            </div>
        )
    }
}