import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper , faUser } from '@fortawesome/free-solid-svg-icons'


const style = {
    navbar:{
        borderBoton: 'solid 1px #aaa',
        padding: '10px 10px'
    },
    links:{
        textDecoration: 'none',
        cursor: 'pointer',
        color: '#555'
    },
    profileLink:{
        float: 'right',
    }
}

export default class Navbar extends React.Component{
    render(){
        return(
            <div style={style.navbar}>
                <Link style={style.links} to='app/newsfeed'> <FontAwesomeIcon icon={faNewspaper}/> Instacool</Link>
                <div style={style.profileLink}>
                    <Link style={style.links} to='app/profile'><FontAwesomeIcon icon={faUser}/> Perfil</Link>

                </div>
            </div>
        )
    }
}