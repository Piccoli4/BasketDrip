import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Flex
  } from '@chakra-ui/react'
  import { FaAngleDown } from "react-icons/fa6"

const ItemListContainer = () => {
  return (
    <Flex align={'center'}> 
        <Menu>
            <MenuButton 
              as={Button} 
              rightIcon={<FaAngleDown />} 
              backgroundColor={'#FFA500'} 
              w={'200px'}
              borderRadius={'none'}
              fontFamily={'Permanent Marker'}
            >
              Marcas
            </MenuButton>
            <MenuList fontFamily={'Permanent Marker'}>
                <MenuItem>Nike</MenuItem>
                <MenuItem>Adidas</MenuItem>
                <MenuItem>Under Armor</MenuItem>
            </MenuList>
        </Menu>
    </Flex>
  )
}

export default ItemListContainer
