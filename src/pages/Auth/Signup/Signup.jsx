import React from 'react'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react';
import UserContext from "../../../Contexts/users/UserContext.jsx";

function Signup () {

  const userCtx = useContext( UserContext )
  const { registerUser } = userCtx
  const [ formValues, setFormValues ] = useState( {
    name: "",
    surname: "",
    email: "",
    password: ""
  } )

  async function handleSubmit( event ) {
    event.preventDefault()
    await registerUser( formValues )
    console.log( formValues );
  }

  async function handleFormChange( event ) {
    const { target } = event
    const { name, value } = target
    const newValues = { ...formValues, [ name ]: value }
    setFormValues( newValues )
  }

  return (
    <div className='signup template d-flex justify-content-center align-items-center  vh-100 bg-primary'>
      <div className='form_container p-5 rounded bg-white'>
        <form onSubmit= {handleSubmit}>
        <h3 className='text-center'>Crea tu cuenta</h3>
        <div className='mb-2'>
          <label htmlFor="name">Nombre</label>
          <input id='name'  name='name'type="text" value={formValues.name} onChange={handleFormChange} placeholder="ingrese su nombre" className="form-control"/>
        </div>
        <div className='mb-2'>
          <label htmlFor="surname">Apellido</label>
          <input id='surname' name='surname'type="text" value={formValues.surname} onChange={handleFormChange} placeholder="ingrese su apellido" className="form-control"/>
        </div>
        <div className='mb-2'>
          <label htmlFor="email">Email</label>
          <input id='email' name='email'type="email" value={formValues.email} onChange={handleFormChange} placeholder="ingrese su Email" className="form-control"/>
        </div>
        <div className='mb-2'>
          <label htmlFor="password">Contraseña</label>
          <input id='password' name='password'type="password" value={formValues.password} onChange={handleFormChange} placeholder="ingrese una contraseña" className="form-control"/>

        </div>
        
          <div className='d-grid mt-2'>
          <button type='submit'className='btn btn-primary'>Crear cuenta</button>

          </div>
          <p className='text-end mt-2'>
            Si ya tienes cuenta<Link to ="/auth/login"className='ms-2'>Inicio de sesión</Link>
          </p>
      </form>
      </div>
      </div>
  )
}

export default Signup