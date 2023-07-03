import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Header }from './componentes/Header/Header.jsx'
import Login from './pages/Auth/Login/Login.jsx'
import SignUp from './pages/Auth/Signup/Signup.jsx'
import Home from "./pages/Home/Home.jsx";
import Product from './pages/Product/Product.jsx'
import Products from './pages/Products/Products.jsx'
import Profile from './pages/Profile/Profile.jsx'
import UserState from './contexts/users/UserState.jsx' ;

function App() {
 

  return (
    
      <div className='App'>
        <UserState>
        <BrowserRouter>
        <Header></Header>
        <Routes>
        <Route path='/' element={ <Home></Home>}
          ></Route>
          <Route path='/home' element={ <Home></Home>}
          ></Route>
          <Route path='/products' element={ <Products></Products>}
          ></Route>
          <Route path='/products/:productId' element={ <Product></Product>}
          ></Route>
          <Route path='/auth/login' element={ <Login></Login>}
          ></Route>
          <Route path='/auth/signup' element={ <SignUp></SignUp>}
          ></Route>
          <Route path='/profile' element={ <Profile></Profile>}
          ></Route>
        </Routes>
        </BrowserRouter>
        </UserState>
        
      </div>
      
  )
};

export default App
