import { Box, Image, Text, Divider, ButtonGroup, Button, useBreakpointValue, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({ marca, modelo, precio, img, id, outOfStock }) => {
  return (
    <Flex 
      h={'420px'}
      border='1px solid #FF6F00'
      borderRadius='10px'
      p={3}
      transition='transform 0.3s, box-shadow 0.3s'
      _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
      textAlign='center'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justify={'center'}
      alignContent={'center'}
    >
      <Image 
        src={img} 
        alt={`${marca} ${modelo}`} 
        borderRadius='md' 
        mb={4}
        objectFit='contain'
        boxSize='260px'
      />
      <Text fontFamily='Montserrat, sans-serif' fontWeight='600' fontSize={useBreakpointValue({ base: '16px', md: '18px' })}>
        {marca}
      </Text>
      <Text fontFamily='Montserrat, sans-serif' fontWeight='500' color='gray.500' fontSize={useBreakpointValue({ base: '14px', md: '14px' })}>
        {modelo}
      </Text>
      <Text fontFamily='Montserrat, sans-serif' fontWeight='bold' fontSize={useBreakpointValue({ base: '12px', md: '18px' })} color='primary' mt={2}>
        ${precio.toLocaleString('es-ES')}
      </Text>
      <Divider />
      <ButtonGroup spacing='2' mt={3}>
        {outOfStock ? (
            <Text 
              fontFamily='Montserrat, sans-serif' 
              fontWeight='700' 
              fontSize='20px'
              color='#FF6F00'
              textShadow={'2px 1.5px 2px #000'}
            >
              Sin stock
            </Text>
          ) : (
            <Link to={`/producto/${id}`}>
              <Button
                size='md'
                bg='#FF6F00'
                color='white'
                textShadow={'2px 1.5px 3px #000'}
                _hover={{ bg: '#E65C00', boxShadow: '2px 2px 6px #aaa', cursor: 'Pointer' }}
                _active={{ transform: 'scale(.9)' }}
              >
                Detalle
              </Button>
            </Link>
          )}
      </ButtonGroup>
    </Flex>
  )
}

export default Item;
