import React from 'react'
import Footer from '../components/Footer.jsx'


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
                <img style={style.img} src={image} />
            </div>
        )
    }
}