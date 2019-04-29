import React from 'react'
import Post from '../../components/Post'
import Container from '../../components/Container'

const style = {
    post:{
        margin: '0 auto',
    }
}

export default class Newsfeed extends React.Component{
    render(){
        return(
            <Container center={false}>
            <div style={style.post}>
                <Post image={"http://placekitten.com/g/300/200"} />
            </div>
            <div style={style.post}>
                <Post image={"http://placekitten.com/g/300/200"} />
            </div>
            </Container>
        )
    }
}