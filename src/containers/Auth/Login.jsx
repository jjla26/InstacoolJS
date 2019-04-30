import React from 'react'
import Card from '../../components/Card'
import Container from '../../components/Container'
import Title from '../../components/Title'
import LoginForm from '../../components/LoginForm'
import { connect } from 'react-redux'
import { login } from '../../ducks/Users'

class Login extends React.Component{
    render(){

        return(
            <Container center={true}>
                <Card>
                <Title>
                    Iniciar Sesión
                </Title>
                <LoginForm />
                </Card>
            </Container>
        )
    }
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
    login: payload => dispatch(login(payload))
})

export default connect (mapStateToProps, mapDispatchToProps)(Login)