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
import { getProductos } from '../../data/asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {

  const [ productos, setProductos ] = useState([])

  useEffect(() => {
    getProductos()
      .then((res) => setProductos(res))
      .catch((error) => console.log(error))

  }, [])

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
                  <MenuItem fontFamily={'Montserrat, sans-serif'} fontWeight={'600'}>Nike</MenuItem>
                  <MenuItem fontFamily={'Montserrat, sans-serif'} fontWeight={'600'}>Adidas</MenuItem>
                  <MenuItem fontFamily={'Montserrat, sans-serif'} fontWeight={'600'}>Under Armor</MenuItem>
              </MenuList>
          </Menu>
      </Flex>
      <ItemList productos={productos}/>
    </Box>
  )
}

export default ItemListContainer
