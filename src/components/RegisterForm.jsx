import React from 'react'
import { Link } from 'react-router-dom'
import Center from './Center'
import Input from './Input'
import Button from './Button'
import { reduxForm, Field } from 'redux-form'

class RegisterForm extends React.Component{
    render(){
        const { handleSubmit } = this.props
        return(
            <form onSubmit={handleSubmit}>
                <Field  name="email" placeholder="Correo" label="Correo" type="email" component={Input}/>
                <Field  name="password" placeholder="Passowrd" label="Contraseña" type="password" component={Input}/>
                <Field  name="confirmPassword" placeholder="Confirmar Passowrd" label="Confirmar Contraseña" type="password" component={Input}/>
                <Button block="true">
                    Enviar
                </Button>
                <Center>
                    <Link to="/">Iniciar Sesión</Link>
                </Center>

            </form>
        )
    }
}

export default reduxForm({
    form: 'register',
})(RegisterForm)