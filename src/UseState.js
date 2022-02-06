import React from 'react';

function UseState({ name }) {
  // agregamos un manejo de estado para el error
  const [ error, setError ] = React.useState(false);
  const [ loading, setLoading ] = React.useState(false);

  React.useEffect(()=> {
    console.log('empezando useEffect');
    if (loading) {
      setTimeout(() => {
        console.log('validando');
        setLoading(false);
        console.log('terminando validación');
      }, 3000);
    }
    console.log('terminando useEffect');
  }, [loading])

  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Por favor, escribe el código de seguridad.</p>
      {error &&  (
        <p>Error: el código es incorrecto.</p>
      )}
      {loading &&  (
        <p>Cargando...</p>
      )}
      <input placeholder='Código de seguridad'/>
      <button
        onClick={() => setLoading(true)}
      >Comprobar</button>
    </div>
  );}

export { UseState };
