import React, { Component } from 'react';

class Loading extends Component {
  componentWillUnmount(){
    console.log('Component Will Unmount');
  }
  
  render() {
    return (
      <p>Cargando...</p>
    );
  }
}

export { Loading };
