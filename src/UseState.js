import React from 'react';

function UseState({ name }) {
  // agregamos un manejo de estado para el error
  const [ error, setError ] = React.useState(false);

  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Por favor, escribe el código de seguridad.</p>
      {error &&  (
        <p>Error: el código es incorrecto.</p>
      )}
      <input placeholder='Código de seguridad'/>
      <button
        onClick={() => setError(!error)}
      >Comprobar</button>
    </div>
  );}

export { UseState };
