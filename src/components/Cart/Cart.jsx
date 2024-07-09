import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import Context from '../../context/CartContext'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react'
  import { TiDeleteOutline } from "react-icons/ti";
import { Link } from 'react-router-dom';


const Cart = () => {

    const { cart, removeItem, clearCart, getTotal, incrementarItem, decrementarItem } = useContext(Context)
    if (cart.length === 0) {
        return (
            <Flex justify={'center'} direction={'column'} align={'center'} h={'85vh'}>
                <Text fontSize="45px" color="gray.600" mb={6}>
                    Todavía no agregaste productos al carrito.
                </Text>
                <Link to="/">
                    <Button 
                        fontSize={'30px'}
                        fontWeight={'400'} 
                        backgroundColor='#FF6F00' 
                        p={6}
                        boxShadow={'2px 2px 6px #777'}
                        textShadow={'1px 1.5px 3px #FFF'}
                        _active={{transform: 'scale(.9)'}}
                        _hover={{backgroundColor:'#FFD1AD'}}  
                    >
                        Ver productos
                    </Button>
                </Link>
            </Flex>
        )
    } else {
        return (
            <TableContainer>
                <Heading 
                    align={'center'} 
                    m={'3'}
                    fontFamily={'Permanent Marker'}
                    fontSize={'25px'}
                    textShadow={'1.5px 1.5px 2px #777, 4px 4px 3px #ccc'}
                >
                    CARRITO DE COMPRAS
                </Heading>
                <Table>
                    <Thead>
                        <Tr>
                            <Th fontSize={'15px'}>Producto</Th>
                            <Th textAlign={'center'} fontSize={'15px'}>Talle</Th>
                            <Th textAlign={'center'} fontSize={'15px'}>Precio</Th>
                            <Th textAlign={'center'} fontSize={'15px'}>Cantidad</Th>
                            <Th textAlign={'center'} fontSize={'15px'}>Subtotal</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            cart.map((prod) => (
                                <Tr key={prod.id}>
                                    <Td>
                                        <Flex justify={'left'} align={'center'} gap={'55px'}>
                                            <Button 
                                                onClick={() => removeItem(prod.id)} 
                                                backgroundColor={'transparent'}
                                                _hover={'none'}
                                            >
                                                <TiDeleteOutline
                                                    size="35px" 
                                                    cursor="pointer" 
                                                    color="red"
                                                />
                                            </Button>
                                            <Image 
                                                src={prod.img}
                                                alt={`${prod.marca} ${prod.modelo}`}
                                                borderRadius='md'
                                                objectFit='contain'
                                                boxSize='130px'
                                            />
                                            <Flex direction={'column'}>
                                                <Box 
                                                    fontSize={'20px'}
                                                    fontWeight={'700'}
                                                >
                                                    {prod.marca}
                                                </Box> 
                                                <Box
                                                    fontSize={'18px'}
                                                    fontWeight={'500'}
                                                >
                                                    {prod.modelo}
                                                </Box>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td 
                                        textAlign={'center'}
                                        fontSize={'18px'}
                                        fontWeight={'500'}
                                    >
                                        {prod.talle}
                                    </Td>
                                    <Td 
                                        textAlign={'center'}
                                        fontSize={'18px'}
                                        fontWeight={'500'}
                                    >
                                        ${prod.precio}
                                    </Td>
                                    <Td 
                                        textAlign={'center'}
                                        fontSize={'18px'}
                                        fontWeight={'500'}
                                    >
                                        <Button 
                                            onClick={() => decrementarItem(prod.id)} 
                                            backgroundColor='#FF6F00' 
                                            marginRight={'3px'} 
                                            padding={'2px'}
                                            fontSize={'16px'}
                                            fontWeight={'bolder'}
                                            height={'30px'} 
                                            boxShadow={'2px 2px 6px #777'}
                                            textShadow={'1px 1.5px 3px #FFF'}
                                            _hover={{backgroundColor: '#FFD1AD'}}
                                            _active={{transform: 'scale(.9)'}}
                                        >
                                            -
                                        </Button>
                                        {prod.quantity}
                                        <Button 
                                            onClick={() => incrementarItem(prod.id, prod.stock)} 
                                            backgroundColor='#FF6F00' 
                                            marginLeft={'6px'}
                                            padding={'3px'}
                                            fontSize={'16px'}
                                            fontWeight={'bolder'}
                                            height={'30px'} 
                                            boxShadow={'2px 2px 6px #777'}
                                            textShadow={'1px 1.5px 3px #FFF'}
                                            _hover={{backgroundColor: '#FFD1AD'}}
                                            _active={{transform: 'scale(.9)'}}
                                        >
                                            +
                                        </Button>
                                    </Td>
                                    <Td 
                                        textAlign={'center'}
                                        fontSize={'18px'}
                                        fontWeight={'500'}
                                    >
                                        ${prod.precio * prod.quantity}
                                    </Td>
                                </Tr>
                            ))     
                        }
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>
                                <Button 
                                    onClick={() => clearCart()}
                                    fontSize={'20px'}
                                    fontWeight={'500'} 
                                    backgroundColor='#FF6F00' 
                                    p={4}
                                    boxShadow={'2px 2px 6px #777'}
                                    textShadow={'1px 1.5px 3px #FFF'}
                                    _active={{transform: 'scale(.9)'}}
                                    _hover={{backgroundColor:'#FFD1AD'}} 
                                >
                                    Vaciar Carrito
                                </Button>
                            </Th>
                            <Th></Th>
                            <Th colSpan={2} fontSize={'18px'}>Total del carrito</Th>
                            <Th textAlign={'center'} fontSize={'20px'}>${getTotal()}</Th>
                        </Tr>
                        <Tr>
                            <Th></Th>
                            <Th colSpan={2}></Th>
                            <Th textAlign={'center'}>
                                <Link to='/checkout'>
                                    <Button
                                        w={'80%'}
                                        fontSize={'20px'}
                                        fontWeight={'500'} 
                                        backgroundColor='#FF6F00' 
                                        p={4}
                                        boxShadow={'2px 2px 6px #777'}
                                        textShadow={'1px 1.5px 3px #FFF'}
                                        _active={{transform: 'scale(.9)'}}
                                        _hover={{backgroundColor:'#FFD1AD'}}  
                                        >
                                        Finalizar Compra
                                    </Button>
                                </Link>
                            </Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        )
    }


}

export default Cart
