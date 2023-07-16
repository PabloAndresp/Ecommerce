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
          <label htmlFor="id"></label>
          <p>Id= { user._id } </p>
        </div>
        <div className='mb-2'>
          <label htmlFor="nombre completo"></label>
          <p> Nombre completo= { user.fullName }</p>
        </div>
        <div className='mb-2'>
          <label htmlFor="Correo"></label>
          <p> Nombre completo= { user.email }</p>
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