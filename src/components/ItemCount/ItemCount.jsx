import React, { useState } from 'react'
import { Box, Button, Flex } from '@chakra-ui/react'

const ItemCount = ({stock, valorInicial, onAdd}) => {

    const  [count, setCount ] = useState(valorInicial)

    const incrementar = () => {
        count < stock && setCount(count + 1)
    }

    const decrementar = () => {
        count > valorInicial && setCount(count - 1)
    }


  return (
    <Flex h={'20vh'} justify={'space-evenly'} align={'center'} direction={'column'} fontSize={'25px'} fontFamily={'Permanent Marker'}>
      <Box>
        <Button backgroundColor='#FF6F00' onClick={decrementar} marginRight={'15px'}>-</Button>
        {count} {count === 1 ? 'par' : 'pares'}
        <Button backgroundColor='#FF6F00' onClick={incrementar} marginLeft={'15px'}>+</Button>
      </Box>
      <Box>
        <Button 
          size='xl'
          fontWeight={'400'} 
          backgroundColor='#FF6F00' 
          p={3}
          boxShadow={'2px 2px 6px #777'}
          textShadow={'1px 1.5px 3px #FFF'}
          _hover={{backgroundColor: '#FFC7AD'}}
          _active={{transform: 'scale(.9)'}} 
          onClick={() => onAdd(count)}>
            Agregar al carrito
        </Button>
      </Box>
    </Flex>
  )
}

export default ItemCount
