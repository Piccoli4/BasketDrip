import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast } from 'react-toastify';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';

const ItemDetail = ({marca, modelo, precio, stock, descripcion, img, talle}) => {

    const onAdd = (quantity) => {
        toast(`Agregaste ${quantity === 1 ? '1 unidad' : `${quantity} unidades`}.`)
    }

  return (
    <Flex justify={'space-evenly'} align={'center'} minH={'70vh'}>
        <Flex minW={'60%'} direction={'column'} justify={'space-evenly'} align={'center'} gap={1}>
            <Flex justify={'center'} align={'center'}>
                <Image 
                    src={img} 
                    alt={`${marca} ${modelo}`}
                    maxW={'60%'}
                    p={5}
                    objectFit='contain'
                    _hover={{cursor: 'pointer'}}
                />
            </Flex>
            <Flex justify={'space-evenly'} align={'center'} gap={3}>

                {/* Imagenes para reemplazar por otras donde se muestren distintas vistas del producto. */}

                <Image src='https://via.placeholder.com/100' _hover={{cursor: 'pointer'}}/>
                <Image src='https://via.placeholder.com/100' _hover={{cursor: 'pointer'}}/>
                <Image src='https://via.placeholder.com/100' _hover={{cursor: 'pointer'}}/>
                <Image src='https://via.placeholder.com/100' _hover={{cursor: 'pointer'}}/>
                <Image src='https://via.placeholder.com/100' _hover={{cursor: 'pointer'}}/>
            </Flex>
        </Flex>
        <Flex 
            minW={'40%'}
            minH={'100%'}
            direction={'column'}
            justify={'space-evenly'}
        >
            <Text fontFamily='Montserrat, sans-serif' fontWeight='700' fontSize={'25px'} textTransform={'uppercase'} mb={1}>
                {marca}
            </Text>
            <Text fontFamily='Montserrat, sans-serif' fontWeight='500' color='gray.700' fontSize={'22px'} mb={1}>
                {modelo}
            </Text>
            <Text fontFamily='Montserrat, sans-serif' fontWeight='500' color='gray.500' fontSize={'20px'} mb={5}>
                {descripcion}
            </Text>
            <Box fontFamily='Montserrat, sans-serif' fontWeight='500' color='gray.700' mt={5} mb={5}>
                <Flex direction={'column'}>
                    <Box fontSize={'18px'}>Seleccionar Talle</Box>

                    {/* Por ahora quedara como boton hasta acomodar para poder seleccionar 
                    un talle de los que se encuentren disponible en stock. */}

                    <Button 
                        border={'solid 1px #ddd'} 
                        borderRadius={'5px'} 
                        w={'15px'}
                        align={'center'}
                        _hover={{cursor: 'pointer'}}
                        _focus={{backgroundColor: '#FF6F00'}} 
                    >
                        {talle}
                    </Button>
                </Flex>
            </Box>
            <Text fontFamily='Montserrat, sans-serif' fontWeight='500' fontSize={'30px'} color='primary'>
                ${precio.toLocaleString('es-ES')}
            </Text>
            <Flex>
                <ItemCount stock={stock} valorInicial={1} onAdd={onAdd} />
            </Flex>
            <ToastContainer />
        </Flex>
    </Flex>
  )
}

export default ItemDetail
