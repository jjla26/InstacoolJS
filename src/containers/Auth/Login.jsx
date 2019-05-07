import React from 'react'
import Card from '../../components/Card'
import Container from '../../components/Container'
import Title from '../../components/Title'
import LoginForm from '../../components/LoginForm'
import { connect } from 'react-redux'
import { login as loginThunk } from '../../ducks/Users'

class Login extends React.Component{
    render(){
        const { login } = this.props
        return(
            <Container center={true}>
                <Card>
                <Title>
                    Iniciar Sesión
                </Title>
                <LoginForm onSubmit={login} />
                </Card>
            </Container>
        )
    }
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
    login: payload => dispatch(loginThunk(payload))
})

export default connect (mapStateToProps, mapDispatchToProps)(Login)