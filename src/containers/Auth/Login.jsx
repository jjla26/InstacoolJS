import React from 'react'
import Card from '../../components/Card'
import Container from '../../components/Container'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Title from '../../components/Title'
import { Link } from 'react-router-dom'
import Center from '../../components/Center'



export default class Login extends React.Component{
    render(){
        return(
            <Container center={true}>
                <Card>
                <Title>
                    Iniciar Sesión
                </Title>
                <Input placeholder="Correo" title="Correo" />
                <Input placeholder="Contrasena" title="Contraseña" />
                <Button block="true">
                    Enviar
                </Button>
                <Center>
                    <Link to="/registro">Ir a Registro</Link>
                </Center>
                </Card>
            </Container>
        )
    }
}
