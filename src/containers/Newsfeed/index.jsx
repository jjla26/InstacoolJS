import React from 'react'
import Post from '../../components/Post'
import Container from '../../components/Container'
import Card from '../../components/Card'
export default class Newsfeed extends React.Component{
    render(){
        return(
            <Container center={false}>
            <div>
                <Post />

            </div>
            </Container>
        )
    }
}