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
import { getProductos, getProductsByMarca } from '../../data/asyncMock'
import ItemList from '../ItemList/ItemList'
import { Link, useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'

const ItemListContainer = () => {

  const [ productos, setProductos ] = useState([])
  const [ loading, setLoading ] = useState(true)

  const { markId } = useParams()

  useEffect(() => {
    setLoading(true)
    const dataProductos = markId ? getProductsByMarca(markId) : getProductos()
    
    dataProductos
    .then((data) => setProductos(data))
    .catch((error) => console.log(error))
    .finally(() => setLoading(false))
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
