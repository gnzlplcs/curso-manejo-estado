import React from 'react';
import { Loading } from './Loading';

const SECURITY_CODE = 'paradigma'

class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      error: false,
      loading: false,
    }
  }

  componentDidUpdate() {
    if (this.state.loading) {
      setTimeout(() => {
        if (this.state.value === SECURITY_CODE) {
          this.setState({ error: false })
        } else {
          this.setState({ error: true })
        }
        this.setState({ loading: false })
      }, 3000);
    }
  }

  render() {
    const { value, error, loading } = this.state;
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>
        <p>Por favor, escribe el código de seguridad.</p>
        {(error && !loading) && (
          <p>Error: el código es incorrecto.</p>
        )}
        {loading && (
          <Loading />
        )}
        <input
          placeholder='Código de seguridad'
          value={value}
          onChange={(e) => (
            this.setState({ value: e.target.value })
          )}
          />
        <button
          onClick={() => this.setState({
            loading: true
          })}
        >
          Comprobar
        </button>
      </div>
    );
  }
}

export { ClassState };
