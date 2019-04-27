import React from 'react'
import Card from '../../components/Card'
import Container from '../../components/Container'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Title from '../../components/Title'
import { Link } from 'react-router-dom'
import Center from '../../components/Center'



export default class Signup extends React.Component{
    render(){
        return(
            <Container>
                <Card>
                <Title>
                    Registrate
                </Title>
                <Input placeholder="Correo" title="Correo" />
                <Input placeholder="Contrasena" title="Contraseña" />
                <Input placeholder="Repite Contraseña" title="Repite Contraseña" />
                <Button block={true}>
                    Enviar
                </Button>
                <Center>
                    <Link to="/">Iniciar Session</Link>
                </Center>
                </Card>
            </Container>
        )
    }
}
