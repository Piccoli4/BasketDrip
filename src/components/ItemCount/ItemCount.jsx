import React, { useState } from 'react'
import { Button, Flex } from '@chakra-ui/react'

const ItemCount = () => {

    const  [count, setCount ] = useState(1)
    const stock = 5

    const incrementar = () => {
        count < stock && setCount(count + 1)
    }

    const decrementar = () => {
        count > 1 && setCount(count - 1)
    }


  return (
    <Flex justify={'center'} align={'center'} fontSize={'25px'} fontFamily={'Permanent Marker'}>
        <Button colorScheme='red' onClick={decrementar} marginRight={'5px'}>-</Button>
        {count}
        <Button colorScheme='red' onClick={incrementar} marginLeft={'5px'}>+</Button>
    </Flex>
  )
}

export default ItemCount
