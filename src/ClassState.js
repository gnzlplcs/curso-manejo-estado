import React from 'react';
import { Loading } from './Loading';

const SECURITY_CODE = 'paradigma';

class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      error: false,
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
        // this.setState(prevState => ({ loading: !prevState.loading }))
        if(SECURITY_CODE === this.state.value) {
          this.setState({ error: false, loading: false });
        } else {
          this.setState({ error: true, loading: false })
        }
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
        <input
          placeholder='Código de seguridad'
          value={this.state.value}
          onChange={(event) => {
            this.setState({ value: event.target.value })
          }}
          />
        <button
          onClick={() =>
            this.setState(prevState => ({ loading: !prevState.loading }))
          }
        >Comprobar</button>
        {(this.state.error && !this.state.loading) && (
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