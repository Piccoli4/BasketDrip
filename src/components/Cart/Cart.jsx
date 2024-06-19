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

    const { cart, removeItem, clearCart, getTotal } = useContext(Context)
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
                    mb={'5'}
                    textShadow={'1.5px 1.5px 2px #777, 4px 4px 3px #ccc'}
                >
                    CARRITO DE COMPRAS
                </Heading>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Producto</Th>
                            <Th textAlign={'center'}>Precio</Th>
                            <Th textAlign={'center'}>Cantidad</Th>
                            <Th textAlign={'center'}>Subtotal</Th>
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
                                                <Box>{prod.marca}</Box> 
                                                <Box>{prod.modelo}</Box>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td textAlign={'center'}>${prod.precio}</Td>
                                    <Td textAlign={'center'}>{prod.quantity}</Td>
                                    <Td textAlign={'center'}>${prod.precio * prod.quantity}</Td>
                                </Tr>
                            ))     
                        }
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>
                                <Button onClick={() => clearCart()}>
                                    Vaciar Carrito
                                </Button>
                            </Th>
                            <Th colSpan={3}>Total del carrito</Th>
                            <Th>${getTotal()}</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        )
    }


}

export default Cart
