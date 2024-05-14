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
    <Flex justify={'center'} align={'center'}> 
        <Menu>
            <MenuButton as={Button} rightIcon={<FaAngleDown />}>Todas</MenuButton>
            <MenuList>
                <MenuItem>Nike</MenuItem>
                <MenuItem>Adidas</MenuItem>
                <MenuItem>Under Armor</MenuItem>
            </MenuList>
        </Menu>
    </Flex>
  )
}

export default ItemListContainer
