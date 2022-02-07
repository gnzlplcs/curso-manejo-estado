import React, { useState } from 'react';

const SECURITY_CODE = 'paradigma'

function UseState({ name }) {
  const [ state, setState ] = useState({
    error: false,
    loading: false,
    value: '',
    deleted: false,
    confirmed: false,
  });

  const onConfirm = () => {
    setState({
      ...state,
      error: false,
      loading: false,
      confirmed: true,
    });
  };

  const onError = () => {
    setState({
      ...state,
      error: true,
      loading: false,
      value: ''
    });
  };

  const onWrite = (e) => {
    setState({
      ...state,
      value: e,
    });
  };

  const onCheck = () => {
    setState({
      ...state,
      loading: true
    });
  };

  const onDelete = () => {
    setState({
      ...state,
      deleted: true,
    });
  };

  const onReset = () => {
    setState({
      ...state,
      confirmed: false,
      deleted: false,
      value: '',
    });
  };

  React.useEffect(()=> {
    if (state.loading) {
      setTimeout(() => {
        if (state.value === SECURITY_CODE) {
          onConfirm();
        } else {
          onError();
        }
      }, 3000);
    }
  }, [state.loading])

  if (!state.deleted && !state.confirmed) {
      return (
      <div>
        <h2>Eliminar {name}</h2>
        <p>Por favor, escribe el código de seguridad.</p>
        {(state.error && !state.loading) && (
          <p>Error: el código es incorrecto.</p>
        )}
        {state.loading &&  (
          <p>Cargando...</p>
        )}
        <input
          placeholder='Código de seguridad'
          value={state.value}
          onChange={(e) => onWrite(e.target.value)}
        />
        <button onClick={() => onCheck()}>Comprobar</button>
      </div>
    );
  } else if (state.confirmed && !state.deleted) {
    return (
      <>
        <p>¿Estás seguro que deseas eliminar UseState?</p>
        <button onClick={() => onDelete()}>Sí, eliminar</button>
        <button onClick={() => onReset()}>No, me arrepentí</button>
      </>
    );
  } else {
    return (
      <>
        <p>Deleted!</p>
        <button onClick={() => onReset()}>Volver atrás</button>
      </>
    );
  }
}

export { UseState };