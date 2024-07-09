import React, { useContext, useState } from 'react'
import Context from '../../context/CartContext'
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Heading,
    Stack,
    useColorModeValue,
    FormErrorMessage,
  } from '@chakra-ui/react';
import { Timestamp, addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import { db } from '../../config/firebase';
import Spinner from '../Spinner/Spinner'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const Checkout = () => {
    const [ user, setUser ] = useState({
        name: '',
        email: '',
        repeatedEmail: '',
        phone: '',
        direccion: ''
    })

    const [ error, setError ] = useState({})
    const [ loading, setLoading ] = useState(false)

    const { cart, getTotal, clearCart } = useContext(Context)
    const navigate = useNavigate()

    const updateUser = (event) => {
        if (event.target) {
            // Maneja input regulares
            setUser((user) => ({
                ...user,
                [event.target.name]: event.target.value
            }));
        } else {
            // Maneja react-phone-input-2
            setUser((user) => ({
                ...user,
                phone: event // Utiliza 'event' directamente ya que contiene el número de teléfono
            }));
        }
    }
    

    const validateForm = () => {

        const errors = {}

        if(!user.name) {
            errors.name = 'Debés agregar un nombre y apellido.'
        } else if(user.name.length < 3) {
            errors.name = 'Su nombre y apellido es muy corto.'
        }

        if(!user.email) {
            errors.email = 'Debés agregar un email.'
        } else if(!/\S+@\S+\.\S+/.test(user.email)) {
            errors.email = 'El email ingresado es inválido.'
        } else if (/\s/.test(user.email)) {
            errors.email = 'El email no debe contener espacios.'
        }

        if(!user.repeatedEmail) {
            errors.repeatedEmail = 'Debés repetir el email'
        } else if(!/\S+@\S+\.\S+/.test(user.repeatedEmail)) {
            errors.repeatedEmail = 'El email ingresado es inválido.'
        } else if(user.email !== user.repeatedEmail) {
            errors.repeatedEmail = 'Los email ingresados no coinciden.'
        } else if (/\s/.test(user.repeatedEmail)) {
            errors.repeatedEmail = 'El email no debe contener espacios.'
        }

        if(!user.phone) {
            errors.phone = 'Debés agregar un teléfono.'
        } else if (!/^\d+$/.test(user.phone)) {
            errors.phone = 'El número de teléfono es inválido.';
        }

        if(!user.direccion) {
            errors.direccion = 'Debés agregar una dirección.'
        }

        setError(errors)
        return Object.keys(errors).length === 0 
    }

    const getOrder = async () => {

        if (cart.length === 0) {
            Swal.fire({
                title: "Carrito vacío",
                text: "No puedes realizar una compra con el carrito vacío.",
                icon: "error",
                confirmButtonText: "Ok",
            });
            return;
        }

        if(!validateForm()) {
            return 
        }

        setLoading(true);

        // Se obtiene la referencia a la nueva colección creada (orders)
        const coleccion = collection(db, 'orders')

        // Bandera para controlar si hay suficiente stock
        let stockIssue = false;

        // Se crea el objeto 'order' con los datos del usuario, los datos de la compra,
        // el total y la fecha que se realiza la compra
        try {

            for(const item of cart) {
                const docRef = doc(db, 'productos', item.id)
                const productDoc = await getDoc(docRef)
                const currentStock = productDoc.data().stock

                if(currentStock >= item.quantity) {
                    // Actualiza el stock del producto
                    await updateDoc(docRef, {
                        stock: currentStock - item.quantity
                    })
                } else {
                    stockIssue = true;
                    Swal.fire({
                        title: "Producto Sin Stock suficiente",
                        text: `No hay suficiente stock del producto ${item.marca} ${item.modelo}`,
                        icon: "warning",
                        confirmButtonText: "Ok",
                    });
                    break; // Rompe el bucle si hay un problema de stock.
                }
            }

            if(stockIssue) {
                setLoading(false);
                return;
            }

            const order = {
                buyer: user,
                cart: cart,
                total: getTotal(),
                fecha: Timestamp.now()
            }

            // Se agrega ese documento a la colección con 'addDoc'
            const orderRef = await addDoc(coleccion, order)


            Swal.fire({
                title: "Gracias por su compra",
                text: `Su número de orden es: ${orderRef.id}`,
                icon: "success",
                confirmButtonText: "Ir al inicio",
              }).then(() => {
                clearCart()
                navigate('/')
              });


        } catch (error) {
            console.error("Error processing order: ", error);
        } finally {
            setLoading(false);
        }

    }
    

  return (
    <Flex
      align="center"
      justify="center"
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
        {loading ? (
            <Flex justify="center" align="center" h="100vh" w="100vw" position="fixed" top="0" left="0" bg="rgba(255, 255, 255, 0.7)" zIndex="9999">
                <Spinner size="xl" />
            </Flex>
        ) : (
            <Stack
                spacing={3}
                w="full"
                maxW="md"
                bg={useColorModeValue('white', 'gray.700')}
                rounded="xl"
                boxShadow="lg"
                p={6}
                my={6}
            >
                <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }} align="center">
                    Datos de Facturación
                </Heading>
                <FormControl id="name" isRequired isInvalid={!!error.name}>
                    <FormLabel>Apellido y Nombre:</FormLabel>
                    <Input type="text" name="name" textTransform={'capitalize'} onChange={updateUser} />
                    <FormErrorMessage>{error.name}</FormErrorMessage>
                </FormControl>
                <FormControl id="email" isRequired isInvalid={!!error.email}>
                    <FormLabel>Email:</FormLabel>
                    <Input type="email" name="email" onChange={updateUser} />
                    <FormErrorMessage>{error.email}</FormErrorMessage>
                </FormControl>
                <FormControl id="repeatedEmail" isRequired isInvalid={!!error.repeatedEmail}>
                    <FormLabel>Repetir Email:</FormLabel>
                    <Input type="email" name="repeatedEmail" onChange={updateUser} />
                    <FormErrorMessage>{error.repeatedEmail}</FormErrorMessage>
                </FormControl>
                <FormControl id="phone" isRequired isInvalid={!!error.phone}>
                    <FormLabel>Teléfono:</FormLabel>
                    <PhoneInput
                        country={'ar'}
                        regions={['south-america']}
                        inputProps={{
                            name: 'phone',
                            required: true,
                            autoFocus: true,
                            style: {
                                width: '100%',
                                height: '40px',
                                outline: 'none',
                                transition: 'border-color 0.2s ease-in-out',
                                border: '1px solid #CBD5E0',
                            },
                            onFocus: (e) => {
                                e.target.style.borderWidth = '2px';
                                e.target.style.borderColor = '#3182CE';
                            },
                            onBlur: (e) => {
                                e.target.style.borderWidth = '1px';
                                e.target.style.borderColor = '#CBD5E0';
                            }
                        }}
                        onChange={updateUser}
                    />
                    <FormErrorMessage>{error.phone}</FormErrorMessage>
                </FormControl>
                <FormControl id="direccion" isRequired isInvalid={!!error.direccion}>
                    <FormLabel>Dirección:</FormLabel>
                    <Input type="text" name="direccion" onChange={updateUser} />
                    <FormErrorMessage>{error.direccion}</FormErrorMessage>
                </FormControl>
                <Stack spacing={6} align="center">
                    <Button
                        w={'60%'}
                        fontSize={'20px'}
                        fontWeight={'500'}
                        backgroundColor="#FF6F00"
                        p={4}
                        boxShadow={'2px 2px 6px #777'}
                        textShadow={'1px 1.5px 3px #FFF'}
                        _active={{ transform: 'scale(.9)' }}
                        _hover={{ backgroundColor: '#FFD1AD' }}
                        onClick={getOrder}
                    >
                        Finalizar Compra
                    </Button>
                </Stack>
            </Stack>
            )}
        </Flex>
  ) 
}

export default Checkout;
