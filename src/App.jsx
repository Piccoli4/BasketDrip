import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { ChakraProvider } from '@chakra-ui/react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import PageNotFound from './components/PageNotFound/PageNotFound';


function App() {


  return (

    <ChakraProvider>
      <BrowserRouter>
        <NavBar title='E-commerce'/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/marca/:markId' element={<ItemListContainer/>} />
          <Route path='/producto/:productId' element={<ItemDetailContainer/>} />
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
