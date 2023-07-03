import React from 'react'
import { Link } from 'react-router-dom'


function Signup() {
  return (
    <div className='signup template d-flex justify-content-center align-items-center  vh-100 bg-primary'>
      <div className='form_container p-5 rounded bg-white'>
        <form>
        <h3 className='text-center'>Crea tu cuenta</h3>
        <div className='mb-2'>
          <label htmlFor="email">Nombre</label>
          <input type="text" placeholder="ingrese su nombre" className="form-control"/>
        </div>
        <div className='mb-2'>
          <label htmlFor="email">Apellido</label>
          <input type="text" placeholder="ingrese su apellido" className="form-control"/>
        </div>
        <div className='mb-2'>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="ingrese su Email" className="form-control"/>
        </div>
        <div className='mb-2'>
          <label htmlFor="password">Contraseña</label>
          <input type="password" placeholder="ingrese una contraseña" className="form-control"/>

        </div>
        
          <div className='d-grid mt-2'>
          <button className='btn btn-primary'>Crear cuenta</button>

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