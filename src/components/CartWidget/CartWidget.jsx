import { Box } from '@chakra-ui/react';
import React from 'react'
import { BsCart4 } from "react-icons/bs"


const CartWidget = () => {
  return (
    <Box m={4} fontSize={'40px'}>
        <BsCart4 />
    </Box>
  )
}

export default CartWidget
