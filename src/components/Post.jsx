import React from 'react'
import Footer from '../components/Footer.jsx'


const style = {
    body:{
        backgroundColor: '#FFF',
        padding:'10px 10px',
        border:'1px solid #eee',
        marginBottom: '10px'

    }

    
}

export default class Post extends React.Component{
    render(){
        const { image } = this.props

        return(
            <div style={style.body}>
                <img src={image} alt="" />
                <Footer />
            </div>
        )
    }
}