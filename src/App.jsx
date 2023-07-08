import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Header }from './componentes/Header/Header.jsx'
import Login from './pages/Auth/Login/Login.jsx'
import SignUp from './pages/Auth/Signup/Signup.jsx'
import Home from "./pages/Home/Home.jsx";
import Product from './pages/Product/Product.jsx'
import Products from './pages/Products/Products.jsx'
import Profile from './pages/Profile/Profile.jsx'
import UserState from './Contexts/users/UserState.jsx' ;
import ShoppingCartState from './Contexts/ShoppingCart/ShoppingCartState.jsx'
import PrivateRoute from './componentes/PrivateRoute/PrivateRoute.jsx'
import PublicRoute from './componentes/PublicRoute/PublicRoute.jsx'
import AuthRoute from './componentes/AuthRoute/AuthRoute.jsx'

function App() {
 

  return (
    
      <div className='App'>
        <UserState>
        <ShoppingCartState>
        <BrowserRouter>
        <Header></Header>
        <Routes>
              {/* Rutas públicas */ }
              <Route path='/' element={ <Home></Home> }>
              </Route>
              <Route path='/home' element={
                <PublicRoute>
                  <Home></Home>
                </PublicRoute>
              }>
              </Route>
              <Route path='/products' element={
                <PublicRoute>
                  <Products></Products>
                </PublicRoute>
              }>
              </Route>
              <Route path='/products/:productId' element={
                <PublicRoute>
                  <Product></Product>
                </PublicRoute>
              }>
              </Route>
              <Route path='/auth/login' element={
                <AuthRoute>
                  <Login></Login>
                </AuthRoute>
              }>
              </Route>
              <Route path='/auth/signup' element={
                <AuthRoute>
                  <SignUp></SignUp>
                </AuthRoute>
              }>
              </Route>

              {/* Rutas privada */ }
              <Route path='/profile' element={
                <PrivateRoute>
                  <Profile></Profile>
                </PrivateRoute>
              }>
              </Route>
            </Routes>
        </BrowserRouter>
        </ShoppingCartState>
        </UserState>
        
      </div>
      
  )
};

export default App
