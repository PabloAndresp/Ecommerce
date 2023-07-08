
import { Link } from 'react-router-dom'
import React from 'react'
import '../Login/Login.css'
import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import UserContext from "../../../Contexts/users/UserContext.jsx";



function Login () {

  const userCtx = useContext( UserContext )
  const { loginUser } = userCtx
  const navigate = useNavigate()
  const [ formValues, setFormValues ] = useState( {
    email: '',
    password: ''
  } )

  async function handleSubmit( event ) {
    event.preventDefault()
    await loginUser( formValues )
    navigate( "/profile" )

  }

  async function handleFormChange( event ) {
    const { target } = event
    const { name, value } = target
    const newValues = { ...formValues, [ name ]: value }
    setFormValues( newValues )
  }

  return (
    <div className='login template d-flex  justify-content-center align-items-center  vh-100 bg-primary'>
      <div className='form_container p-5 rounded bg-white'>
        <form onSubmit={handleSubmit}>
        <h3 className='text-center'>Iniciar Sesión</h3>
        <div className='mb-2'>
          <label htmlFor="email">Email</label>
          <input id= 'email' name='email' type="email" value={formValues.email} onChange={handleFormChange} placeholder="ingrese Email" className="form-control"/>
        </div>
        <div className='mb-2'>
          <label htmlFor="password">Contraseña</label>
          <input id='password'  name='password'type="password" value={formValues.contraseña} onChange={handleFormChange} placeholder="ingrese contraseña" className="form-control"/>

        </div>
        <div className='mb-2'>
          <input type="checkbox" className="custom-control custom-checkbox" id="check"/>
          <label htmlFor="check" className='custom-input-label ms-2'>
          Guardar Sesión
          </label>
          </div>
          <div className='d-grid'>
            <button type='submit'className='btn btn-primary'>Iniciar Sesión</button>
          </div>
          <p className='text-end mt-2'>
            Olvidaste tu <a href="">contraseña?</a><Link to ="/auth/signup"className='ms-2'>Registrese</Link>
          </p>
          <div className='links'>
            <a href="#">< img src= "/src/assets/google.png" alt=""></img></a>
            <a href="#">< img src= "/src/assets/facebook.png" alt=""></img></a>
            <a href="#">< img src= "/src/assets/outlook.png" alt=""></img></a>
          </div>
      </form>
      </div>
      

    </div>
  )
}

export default Login