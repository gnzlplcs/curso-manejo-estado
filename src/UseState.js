import React from 'react'

function UseState({ name }) {
  const [ error, setError ] = React.useState(false);

  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Por favor, escribe el código de seguridad.</p>
      <input placeholder='Código de seguridad' />
      <button
        onClick={() => setError(prevState => !prevState)}
      >Comprobar</button>
      {error && (
        <p>Error: el código es incorrecto</p>
      )}
    </div>
  )
}

export { UseState };