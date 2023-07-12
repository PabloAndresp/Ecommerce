import {useContext} from 'react'
import UserContext from '../../Contexts/users/UserContext.jsx'


function Profile () {
  const userCtx = useContext( UserContext )
  const { user } = userCtx
  return (

    <div className='signup template d-flex justify-content-center align-items-center  vh-100 bg-primary'>
      <div className='form_container p-5 rounded bg-white'>
        <form>
        <h3 className='text-center' >Mi Perfil</h3>
        <div className='links'>
        <a href="#">< img src= "/src/assets/perfil.png" alt=""></img></a>
        </div>
        <div className='mb-2'>
          <label htmlFor="id">id</label>
          <input id= { user._id } name='name'type="text"  placeholder="" className="form-control"/>
        </div>
        <div className='mb-2'>
          <label htmlFor="nombre completo">Nombre Completo</label>
          <input id='nombre completo' name={ user.fullName }type="text"  placeholder="" className="form-control"/>
        </div>
        <div className='mb-2'>
          <label htmlFor="Correo">Email</label>
          <input id='email' name={ user.email }type="email"  placeholder="" className="form-control"/>
        </div>
        <div className='mb-2'>
          <label htmlFor="password">Contraseña</label>
          <input id='password' name='password'type="password"  placeholder="" className="form-control"/>

        </div>
        
          <div className='d-grid mt-2'>
          

          </div>
          
      </form>
      </div>
      </div>
    //<div>
      //<h1>Profile</h1>
      //<p>ID: { user._id }</p>
      //<p>Nombre Completo: { user.fullName }</p>
      //<p>Correo: { user.email }</p>
    //</div>
  )
}

export default Profile