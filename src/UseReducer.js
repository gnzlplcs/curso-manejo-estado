import React from 'react';

const SECURITY_CODE = 'paradigma';

const initialState = {
  confirmed: false,
  deleted: false,
  error: false,
  loading: false,
  value: '',
};

const actionTypes = {
  check: 'CHECK',
  confirm: 'CONFIRM',
  delete: 'DELETE',
  error: 'ERROR',
  reset: 'RESET',
  write: 'WRITE',
};

const reducerObject = (state, payload) => ({
  [actionTypes.check]: {
    ...state,
    loading: true,
  },
  [actionTypes.confirm]: {
    ...state,
    error: false,
    loading: false,
    confirmed: true,
  },
  [actionTypes.delete]: {
    ...state,
    deleted: true,
  },
  [actionTypes.error]: {
    ...state,
    error: true,
    loading: false,
    value: '',
  },
  [actionTypes.reset]: {
    ...state,
    confirmed: false,
    deleted: false,
    value: '',
  },
  [actionTypes.write]: {
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

  const onCheck = () => dispatch({ type: actionTypes.check })
  const onConfirm = () => dispatch({ type: actionTypes.confirm })
  const onDelete = () => dispatch({ type: actionTypes.delete })
  const onError = () => dispatch({ type: actionTypes.error })
  const onReset = () => dispatch({ type: actionTypes.reset })

  const onWrite = (e) => {
    dispatch({
      type: actionTypes.write,
      payload: e.target.value
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
          onChange={onWrite}
        />
        <button onClick={onCheck}>Comprobar</button>
      </div>
    );
  } else if (state.confirmed && !state.deleted) {
    return (
      <>
        <p>¿Estás seguro que deseas eliminar UseState?</p>
        <button onClick={onDelete}>Sí, eliminar</button>
        <button onClick={onReset}>No, me arrepentí</button>
      </>
    );
  } else {
    return (
      <>
        <p>Deleted!</p>
        <button onClick={onReset}>Volver atrás</button>
      </>
    );
  }
}

export { UseReducer };