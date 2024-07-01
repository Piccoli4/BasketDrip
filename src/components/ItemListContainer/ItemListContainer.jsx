import React, { useEffect, useState } from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Flex,
    Box
  } from '@chakra-ui/react'
import { FaAngleDown } from "react-icons/fa6"
import ItemList from '../ItemList/ItemList'
import { Link, useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../config/firebase'

const ItemListContainer = () => {

  const [ productos, setProductos ] = useState([])
  const [ loading, setLoading ] = useState(true)

  const { markId } = useParams()

  useEffect(() => {
    setLoading(true)
    const getData = async () => {
      // Se obtiene la referencia a la colección 
      const coleccion = collection(db, 'productos')

      // Se crea una referencia de consulta
      const queryRef = !markId ?
      coleccion
      :
      // Pasamos la colección y los datos que se quieren filtrar con query
      query(coleccion, where('marca', '==', markId))

      // Se obtienen los documentos(Productos)
      const response = await getDocs(queryRef)

      //Se mapean los documentos (productos) y se crea un nuevo objeto con los datos del producto
      // y el id que se define de manera automatica
      const productos = response.docs.map((doc) => {
        const newItem = {
          ...doc.data(),
          id: doc.id
        }
        return newItem
      })
      setProductos(productos)
      setLoading(false)

    }

    getData()

  }, [markId])

  return (
    <Box>
      <Flex align={'center'}> 
          <Menu>
              <MenuButton 
                as={Button} 
                rightIcon={<FaAngleDown />} 
                backgroundColor={'#FF6F00'} 
                w={'200px'}
                borderRadius={'none'}
                fontFamily={'Montserrat, sans-serif'}
                fontWeight={'800'}
              >
                Marcas
              </MenuButton>
              <MenuList fontFamily={'Montserrat, sans-serif'} fontWeight={'900'}>
                  <MenuItem fontFamily={'Montserrat, sans-serif'} fontWeight={'600'}>
                    <Link to='/marca/Nike'>Nike</Link>
                  </MenuItem>
                  <MenuItem fontFamily={'Montserrat, sans-serif'} fontWeight={'600'}>
                    <Link to='/marca/Adidas'>Adidas</Link> 
                  </MenuItem>
                  <MenuItem fontFamily={'Montserrat, sans-serif'} fontWeight={'600'}>
                    <Link to='/marca/Under_Armor'>Under Armor</Link>
                  </MenuItem>
                  <MenuItem fontFamily={'Montserrat, sans-serif'} fontWeight={'600'}>
                    <Link to='/marca/361'>361°</Link>
                  </MenuItem>
              </MenuList>
          </Menu>
      </Flex>
      { 
        loading ? 
        <Flex justify={'center'} align={'center'} h={'75vh'}>
          <Spinner />
        </Flex>
        : 
        <ItemList productos={productos}/> 
      }
    </Box>
  )
}

export default ItemListContainer
