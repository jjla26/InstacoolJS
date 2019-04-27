import React, { Component } from 'react';
import './App.css';
import Card from './components/Card'
import Container from './components/Container'
import Input from './components/Input'
import Button from './components/Button'
import Title from './components/Title'
import Link from './components/Link'
import Center from './components/Center'

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Card>
            <Title>
              Iniciar Sesión
            </Title>
            <Input placeholder="Correo" title="Correo" />
            <Input placeholder="Contrasena" title="Contraseña" />
            <Button block={true}>
              Enviar
            </Button>
            <Center>
              <Link> ir a Registro</Link>
            </Center>
          </Card>
        </Container>
      </div>
    );
  }
}

export default App;
