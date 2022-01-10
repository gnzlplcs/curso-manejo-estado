import React from 'react';
import { Loading } from './Loading';

class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: true,
      loading: false,
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('actualización');
    if(this.state.loading) {
      setTimeout(() => {
        this.setState(prevState => ({ loading: !prevState.loading }))
      }, 3000);
    }
  }

  // UNSAFE_componentWillMount() {
  //   console.log('componentWillMount')

  // }

  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name} </h2>
        <p>Por favor, escribe el código de seguridad.</p>
        <input placeholder='Código de seguridad' />
        <button
          onClick={() =>
            this.setState(prevState => ({ loading: !prevState.loading }))
          }
        >Comprobar</button>
        {this.state.error && (
          <p>Error: el código es incorrecto</p>
        )}
        {this.state.loading && (
          <Loading />
        )}
      </div>
    )
  }
}

export { ClassState };