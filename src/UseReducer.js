import React from 'react';

const SECURITY_CODE = 'paradigma';

const initialState = {
  confirmed: false,
  deleted: false,
  error: false,
  loading: false,
  value: '',
};

const reducerObject = (state, payload) => ({
  'CHECK': {
    ...state,
    loading: true,
  },
  'CONFIRM': {
    ...state,
    error: false,
    loading: false,
    confirmed: true,
  },
  'DELETE': {
    ...state,
    deleted: true,
  },
  'ERROR': {
    ...state,
    error: true,
    loading: false,
    value: '',
  },
  'RESET': {
    ...state,
    confirmed: false,
    deleted: false,
    value: '',
  },
  'WRITE': {
    ...state,
      value: payload,
  }
});

const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state, action.payload)[action.type];
  } else {
    return state;
  }
};

function UseReducer({ name }) {
  const [ state, dispatch ] = React.useReducer(reducer, initialState);

  React.useEffect(()=> {
    if (state.loading) {
      setTimeout(() => {
        if (state.value === SECURITY_CODE) {
          dispatch({ type: 'CONFIRM' });
        } else {
          dispatch({ type: 'ERROR' });
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
          onChange={(e) => dispatch({ type: 'WRITE', payload: e.target.value })}
        />
        <button onClick={() => dispatch({ type: 'CHECK' })}>Comprobar</button>
      </div>
    );
  } else if (state.confirmed && !state.deleted) {
    return (
      <>
        <p>¿Estás seguro que deseas eliminar UseState?</p>
        <button onClick={() => dispatch({ type: 'DELETE' })}>Sí, eliminar</button>
        <button onClick={() => dispatch({ type: 'RESET' })}>No, me arrepentí</button>
      </>
    );
  } else {
    return (
      <>
        <p>Deleted!</p>
        <button onClick={() => dispatch({ type: 'RESET' })}>Volver atrás</button>
      </>
    );
  }
}

export { UseReducer };