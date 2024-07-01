import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { ChakraProvider } from '@chakra-ui/react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import PageNotFound from './components/PageNotFound/PageNotFound';
import { CartContextProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';


function App() {


  return (

    <ChakraProvider>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar title='BasketDrip'/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/marca/:markId' element={<ItemListContainer/>} />
            <Route path='/producto/:productId' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='*' element={<PageNotFound/>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </ChakraProvider>
  )
}

export default App
