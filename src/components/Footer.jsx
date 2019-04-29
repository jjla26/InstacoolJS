import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faRetweet } from '@fortawesome/free-solid-svg-icons'

const style = {
    footer:{
        backgroundColor: '#ddd',
        marginLeft: '-10px',
        marginBottom: '-10px',
        width: 'calc(100% + 20px)',
        display: 'flex',
        padding: '10px 10px',
    },
    icon:{
        flex: 1,
        textAlign: 'center',
        cursor: 'pointer'
    }
}


export default class Footer extends React.Component{
    render(){
        return(
            <div style={style.footer}>
                <div style={style.icon}>
                    <FontAwesomeIcon icon={faThumbsUp} /> Like
                </div>
                <div style={style.icon}>
                    <FontAwesomeIcon icon={faRetweet} /> Compartir
                </div>
            </div>
        )
    }
}