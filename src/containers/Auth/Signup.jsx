import React from 'react'
import Card from '../../components/Card'
import Container from '../../components/Container'
import Title from '../../components/Title'
import { connect } from 'react-redux'
import { register as registerThunk } from '../../ducks/Users'
import RegisterForm from '../../components/RegisterForm'

class Signup extends React.Component{
    render(){
        const { register } = this.props
        return(
            <Container center={true}>
                <Card>
                <Title>
                    Registrate
                </Title>
                <RegisterForm onSubmit={register} />
                </Card>
            </Container>
        )
    }
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
    register: payload => dispatch(registerThunk(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
