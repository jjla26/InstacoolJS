import React from 'react'
import { Link } from 'react-router-dom'
import Center from './Center'
import Input from './Input'
import Button from './Button'
import { reduxForm } from 'redux-form'

class LoginForm extends React.Component{
    render(){
        const { handleSubmit } = this.props
        return(
            <form onSubmit={handleSubmit}>
                <Input placeholder="Correo" title="Correo" />
                <Input placeholder="Contrasena" title="Contraseña" />
                <Button block="true">
                    Enviar
                </Button>
                <Center>
                    <Link to="/registro">Ir a Registro</Link>
                </Center>

            </form>
        )
    }
}

export default reduxForm({
    form: 'login',
})(LoginForm)