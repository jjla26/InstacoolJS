import React from 'react'
import ProfileImg from '../../components/ProfileImg'
import Button from '../../components/Button'
import Card from '../../components/Card'

const style = {
    container:{
        padding: '15px',
    },

    topRow:{
        justifyContent: 'space-between',
        display: 'flex',
        marginBottom: '30px',
        padding: '15px'
    },
    row:{
        justifyContent: 'space-between',
        display: 'flex',
        marginBottom: '10px'
    }
}


export default class Profile extends React.Component{
    render(){
        return(
            <div style={style.container}>
                <div style={style.topRow}>
                    <ProfileImg image={"http://placekitten.com/g/100/100"} />
                    <Button>Nuevo Post</Button>
                </div>
                <div style={style.row}>
                    <Card><img src="http://placekitten.com/g/100/100" /></Card>
                    <Card><img src="http://placekitten.com/g/100/100" /></Card>
                    <Card><img src="http://placekitten.com/g/100/100" /></Card>

                </div>


            </div>

        )
    }
}