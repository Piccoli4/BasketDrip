import React, { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast } from 'react-toastify'
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import Context from '../../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';


const ItemDetail = ({ marca, modelo, precio, stock, descripcion, img, img1, img2, img3, img4, talles = [], id }) => {
    const [cantidad, setCantidad] = useState(0)
    const { addItem } = useContext(Context)
    const [mainImage, setMainImage] = useState(img)
    const [selectedImage, setSelectedImage] = useState(img)
    const [selectedTalle, setSelectedTalle] = useState('')

    const onAdd = (quantity) => {
        if (!selectedTalle) {
            Swal.fire({
                icon: 'warning',
                title: 'Olvidas algo...',
                text: 'Por favor, selecciona un talle antes de agregar al carrito.',
            })
            return
        }

        const item = {
            id,
            marca,
            modelo,
            precio,
            img,
            talle: selectedTalle,
        }
        addItem(item, quantity)
        toast(`Agregaste ${quantity === 1 ? `1 par de ${marca} ${modelo}` : `${quantity} pares de ${marca} ${modelo}`}.`)
        setCantidad(quantity)
    }

    const handleImageClick = (image) => {
        setSelectedImage(image)
        setTimeout(() => {
            setMainImage(image)
        }, 250)
    }

    const handleTalleChange = (newTalle) => {
        setSelectedTalle(newTalle)
    }


    return (
        <Flex justify={'space-evenly'} align={'center'} minH={'70vh'} mb={5}>
            <Flex maxW={'60%'} direction={'column'} justify={'space-evenly'} align={'center'} gap={1}>
                <Flex justify={'center'} align={'center'}>
                    <Image
                        src={mainImage}
                        alt={`${marca} ${modelo}`}
                        maxW={'65%'}
                        maxH={'750px'}
                        p={5}
                        objectFit='contain'
                        _hover={{ cursor: 'pointer' }}
                        opacity={mainImage === selectedImage ? 1 : 0.5}
                        transition={'opacity 0.3s ease-in-out'}
                    />
                </Flex>
                <Flex justify={'space-evenly'} align={'center'} gap={3}>
                    {[img1, img2, img3, img4].map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            onClick={() => handleImageClick(image)}
                            w={'100px'}
                            h={'100px'}
                            objectFit={'contain'}
                            _hover={{ cursor: 'pointer' }}
                            filter={selectedImage === image ? 'grayscale(0%)' : 'grayscale(100%)'}
                            border={'1px solid #BBB'}
                            borderRadius={'5px'}
                            transition={'filter 0.3s ease'}
                        />
                    ))}
                </Flex>
            </Flex>
            <Flex
                w={'40%'}
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
                <Text fontFamily='Montserrat, sans-serif' fontWeight='500' color='gray.500' fontSize={'16px'} mb={5}>
                    {descripcion}
                </Text>
                <Box fontFamily='Montserrat, sans-serif' fontWeight='500' color='gray.700' mt={5} mb={5}>
                    <Flex direction={'column'}>
                        <Box fontSize={'18px'}>Seleccionar Talle</Box>
                        <Flex wrap={'wrap'} gap={2}>
                            {talles.map((talle, index) => (
                                <Button
                                    key={index}
                                    border={'solid 1px #ddd'}
                                    borderRadius={'5px'}
                                    minW={'40px'}
                                    textAlign={'center'}
                                    _hover={{ cursor: 'pointer', backgroundColor: '#FF6F00', color: '#FFF' }}
                                    _focus={{ backgroundColor: '#FF6F00' }}
                                    onClick={() => handleTalleChange(talle)}
                                    backgroundColor={selectedTalle === talle ? '#FF6F00' : '#FFF'}
                                    color={selectedTalle === talle ? '#FFF' : '#000'}
                                >
                                    {talle}
                                </Button>
                            ))}
                        </Flex>
                    </Flex>
                </Box>
                <Text fontFamily='Montserrat, sans-serif' fontWeight='500' fontSize={'30px'} color='primary'>
                    ${precio.toLocaleString('es-ES')}
                </Text>
                <Flex>
                    {
                        cantidad > 0 ?
                            <Flex justify={'space-between'} w={'60%'}>
                                <Button
                                    size='xl'
                                    fontWeight={'400'}
                                    backgroundColor='#FF6F00'
                                    p={3}
                                    boxShadow={'2px 2px 6px #777'}
                                    textShadow={'1px 1.5px 3px #FFF'}
                                    _hover={{ backgroundColor: '#FFC7AD' }}
                                    _active={{ transform: 'scale(.9)' }}
                                >
                                    <Link to='/cart'>Ir al Carrito</Link>
                                </Button>
                                <Button
                                    size='xl'
                                    fontWeight={'400'}
                                    backgroundColor='#FF6F00'
                                    p={3}
                                    boxShadow={'2px 2px 6px #777'}
                                    textShadow={'1px 1.5px 3px #FFF'}
                                    _hover={{ backgroundColor: '#FFC7AD' }}
                                    _active={{ transform: 'scale(.9)' }}
                                >
                                    <Link to='/'>Seguir Comprando</Link>
                                </Button>
                            </Flex>
                            :
                            <ItemCount stock={stock} valorInicial={1} onAdd={onAdd} />
                    }
                </Flex>
                <ToastContainer />
            </Flex>
        </Flex>
    )
}

export default ItemDetail
