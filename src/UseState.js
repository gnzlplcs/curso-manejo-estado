import React from 'react'

const SECURITY_CODE = 'paradigma';

function UseState({ name }) {
  const [ value, setValue ] = React.useState('');
  const [ error, setError ] = React.useState(false);
  const [ loading, setLoading ] = React.useState(false);

  console.log(value)

  React.useEffect(() => {
    console.log('empezando el efecto');
    if(loading) {
      setTimeout(() => {
        console.log('haciendo la validación')
        if(value === SECURITY_CODE) {
          setLoading(false)
        } else {
          setError(true)
          setLoading(false)
        }

        console.log('terminando la validación')
      }, 3000);}
    console.log('terminando el efecto');
  }, [loading]);

  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Por favor, escribe el código de seguridad.</p>
      <input
        placeholder='Código de seguridad'
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <button
        onClick={() => {
          // setError(false); solución 1
          setLoading(prevState => !prevState)
        }}
      >Comprobar</button>
      {(error && !loading) && (
        <p>Error: el código es incorrecto</p>
      )}
      {loading && (
        <p>Cargando...</p>
      )}
    </div>
  )
}

export { UseState };