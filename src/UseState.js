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

  React.useEffect(()=> {
    if (state.loading) {
      setTimeout(() => {
        if (state.value === SECURITY_CODE) {
          setState({
            ...state,
            error: false,
            loading: false,
            confirmed: true,
          })
        } else {
          setState({
            ...state,
            error: true,
            loading: false
          });
        }
      }, 3000);
    }
  }, [state.loading])

  if (!state.deleted && !state.confirmed) {
      return (
      <div>
        <h2>Eliminar {name}</h2>
        <p>Por favor, escribe el código de seguridad.</p>
        {(state.error && !state.loading) &&  (
          <p>Error: el código es incorrecto.</p>
        )}
        {state.loading &&  (
          <p>Cargando...</p>
        )}
        <input
          placeholder='Código de seguridad'
          value={state.value}
          onChange={(e) => {
            setState({
              ...state,
              value: e.target.value
            });
          }}
        />
        <button
          onClick={() => setState({
            ...state,
            loading: true
          })}
        >Comprobar</button>
      </div>
    );
  } else if (state.confirmed && !state.deleted) {
    return (
      <>
        <p>¿Estás seguro que deseas eliminar UseState?</p>
        <button
          onClick={() => {
            setState({
              ...state,
              deleted: true,
            })
          }}
        >
          Sí, eliminar
        </button>
        <button
          onClick={() => {
            setState({
              ...state,
              confirmed: false,
              value: '',
            })
          }}
        >
          No, me arrepentí
        </button>
      </>
    );
  } else {
    return (
      <>
        <p>Deleted!</p>
        <button
          onClick={() => {
            setState({
              ...state,
              confirmed: false,
              deleted: false,
              value: ''
            })
          }}
        >
          Volver atrás
        </button>
      </>
    );
  }
}

export { UseState };
