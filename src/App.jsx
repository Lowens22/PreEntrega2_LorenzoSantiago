import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import { CartProvider } from './Context/CartContext'
import { UserProvider} from './Context/UserContext'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Profile from './components/Profile/Profile'
import CheckOut from './components/CheckOut/CheckOut'

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <UserProvider>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer />}/>
              <Route path='/category/:categoryId' element= {<ItemListContainer />}/>
              <Route path='/item/:itemId' element={ <ItemDetailContainer />}/>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/cart' element={<Cart />}/>
              <Route path='/checkout' element={<CheckOut />} />
              <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
            </Routes>
          </CartProvider>
        </UserProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
