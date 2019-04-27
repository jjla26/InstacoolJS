import React, { Component } from 'react';
import './App.css';
import Card from './components/Card'
import Container from './components/Container'
import Input from './components/Input'
import Button from './components/Button'
import Title from './components/Title'
import Link from './components/Link'


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
            <Button>
              Enviar
            </Button>
            <Link> ir a Registro</Link>
          </Card>
        </Container>
      </div>
    );
  }
}

export default App;
