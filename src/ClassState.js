import React, { Component } from 'react';

class ClassState extends Component {
  render() {
    return (
      <div>
        <h2>Eliminar ClassState</h2>
        <p>Por favor, escribe el código de seguridad.</p>
        <input placeholder='Código de seguridad'/>
        <button>Comprobar</button>
      </div>
    );
  }
}

export { ClassState };
