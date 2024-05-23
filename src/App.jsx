import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'


function App() {


  return (

    <ChakraProvider>
      <NavBar title='BasketDrip'/>
      <ItemListContainer/>
    </ChakraProvider>
  )
}

export default App
