import React, { Component } from 'react';
import './App.css';
import Card from './components/Card'
import Container from './components/Container'
import Input from './components/Input'

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Card>
            <Input placeholder="Correo" title="Correo" />
            <Input placeholder="Contrasena" title="Contraseña" />
          </Card>
        </Container>
      </div>
    );
  }
}

export default App;
