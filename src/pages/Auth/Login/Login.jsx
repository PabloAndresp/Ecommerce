
import { Link } from 'react-router-dom'
import React from 'react'
import '../Login/Login.css'



function Login () {
  return (
    <div className='login template d-flex  ajustify-content-centerlign-items-center  vh-100 bg-primary'>
      <div className='form_container p-5 rounded bg-white'>
        <form>
        <h3 className='text-center'>Iniciar Sesión</h3>
        <div className='mb-2'>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="ingrese Email" className="form-control"/>
        </div>
        <div className='mb-2'>
          <label htmlFor="password">Contraseña</label>
          <input type="password" placeholder="ingrese contraseña" className="form-control"/>

        </div>
        <div className='mb-2'>
          <input type="checkbox" className="custom-control custom-checkbox" id="check"/>
          <label htmlFor="check" className='custom-input-label ms-2'>
          Guardar Sesión
          </label>
          </div>
          <div className='d-grid'>
            <button className='btn btn-primary'>Iniciar Sesión</button>
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