import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {
    Flex,
    Image,
    Heading
  } from '@chakra-ui/react'

const NavBar = ({title}) => {
  return (
    <Flex h={'12vh'} w={'100%'} justify={'space-between'} align={'center'} backgroundColor={'#FFA500'}>
        <Image src="../Img/logo.png" alt="Logo" m={4} w={12} h={16}/>
        <Flex justify={'center'} align={'center'} >
            <Heading 
                fontFamily={'Permanent Marker'}
                fontSize={'45px'}
                textShadow={'3px 3px 2px #777, 7px 7px 5px #ccc'}
            >
                {title}
            </Heading>
        </Flex>
        <CartWidget/>
    </Flex>
  )
}

export default NavBar
