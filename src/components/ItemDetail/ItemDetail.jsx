import React, { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { ToastContainer, toast } from 'react-toastify';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import Context from '../../context/CartContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ItemDetail = ({
  marca,
  modelo,
  precio,
  stock,
  descripcion,
  img,
  img1,
  img2,
  img3,
  img4,
  currentQuantity,
  productosSimilares,
}) => {
  const [ cantidad, setCantidad ] = useState(0);
  const { addItem } = useContext(Context);
  const [ mainImage, setMainImage ] = useState(img);
  const [ selectedImage, setSelectedImage ] = useState(img);
  const [ selectedTalle, setSelectedTalle ] = useState('');
  const [ stockTalle, setStockTalle ] = useState(0);
  const [ resetCount, setResetCount ] = useState(0);

  const maxAvailable = stock - currentQuantity;

  const onAdd = (quantity) => {
    if (!selectedTalle) {
      Swal.fire({
        icon: 'warning',
        title: 'Olvidaste algo...',
        text: 'Por favor, selecciona un talle antes de agregar al carrito.',
      });
      return;
    }

    // Busca el producto con el talle seleccionado para obtener el id correcto
    const productoSeleccionado = productosSimilares.find(
      (prod) => prod.talle === selectedTalle
    );

    if (!productoSeleccionado) {
      Swal.fire({
        icon: 'error',
        title: 'Producto no encontrado',
        text: 'No se encontró el producto con el talle seleccionado.',
      });
      return;
    }

    const item = {
      id: productoSeleccionado.id, // Utiliza el id del producto según el talle seleccionado
      marca,
      modelo,
      precio,
      img,
      talle: selectedTalle,
      stock: stockTalle, // Obtiene el stock del talle seleccionado
    };
    addItem(item, quantity);
    toast(
      `Agregaste ${
        quantity === 1
          ? `1 par de ${marca} ${modelo}`
          : `${quantity} pares de ${marca} ${modelo}`
      }.`
    );
    setCantidad(quantity);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setTimeout(() => {
      setMainImage(image);
    }, 250);
  };

  const handleTalleChange = (newTalle) => {
    setSelectedTalle(newTalle);
    const stock = getStock(newTalle);
    setStockTalle(stock);
    setResetCount((prev) => prev + 1);
  };

  // Función para obtener el stock del talle seleccionado
  const getStock = (talle) => {
    const producto = productosSimilares.find((prod) => prod.talle === talle);
    return producto ? producto.stock : 0;
  };

  // Obtener talles únicos disponibles para el producto actual y ordenados de menor a mayor
  const uniqueTalles = [...new Set(productosSimilares.map((prod) => prod.talle))].sort((a,b) => a - b);

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
            objectFit="contain"
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
      <Flex w={'40%'} minH={'100%'} direction={'column'} justify={'space-evenly'}>
        <Text fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize={'25px'} textTransform="uppercase" mb={1}>
          {marca}
        </Text>
        <Text fontFamily="Montserrat, sans-serif" fontWeight="500" color="gray.700" fontSize={'22px'} mb={1}>
          {modelo}
        </Text>
        <Text fontFamily="Montserrat, sans-serif" fontWeight="500" color="gray.500" fontSize={'16px'} mb={5}>
          {descripcion}
        </Text>
        <Box fontFamily="Montserrat, sans-serif" fontWeight="500" color="gray.700" mt={5} mb={5}>
          <Flex direction={'column'}>
            <Box fontSize={'18px'}>Seleccionar Talle</Box>
            <Flex wrap={'wrap'} gap={2}>
              {uniqueTalles.map((talle, index) => (
                <Button
                  key={index}
                  border={'solid 1px #ddd'}
                  borderRadius={'5px'}
                  minW={'40px'}
                  textAlign={'center'}
                  _hover={{ cursor: 'pointer', backgroundColor: '#FF6F00', color: '#FFF' }}
                  _focus={{ backgroundColor: '#FF6F00' }}
                  onClick={() => handleTalleChange(talle)}
                  backgroundColor={talle === selectedTalle ? '#FF6F00' : '#FFF'}
                  color={talle === selectedTalle ? '#FFF' : '#000'}
                  isDisabled={getStock(talle) === 0}
                >
                  {talle}
                </Button>
              ))}
            </Flex>
          </Flex>
        </Box>
        {selectedTalle && (
          <Text fontSize={'18px'}>Stock disponible: {stockTalle}</Text>
        )}
        <Text fontFamily="Montserrat, sans-serif" fontWeight="500" fontSize={'30px'} color="primary">
          ${precio.toLocaleString('es-ES')}
        </Text>
        <Flex>
          {cantidad > 0 ? (
            <Flex justify={'space-between'} w={'60%'}>
              <Button
                size="xl"
                fontWeight={'400'}
                backgroundColor="#FF6F00"
                p={3}
                boxShadow={'2px 2px 6px #777'}
                textShadow={'1px 1.5px 3px #FFF'}
                _hover={{ backgroundColor: '#FFC7AD' }}
                _active={{ transform: 'scale(.9)' }}
              >
                <Link to="/cart">Ir al Carrito</Link>
              </Button>
              <Button
                size="xl"
                fontWeight={'400'}
                backgroundColor="#FF6F00"
                p={3}
                boxShadow={'2px 2px 6px #777'}
                textShadow={'1px 1.5px 3px #FFF'}
                _hover={{ backgroundColor: '#FFC7AD' }}
                _active={{ transform: 'scale(.9)' }}
              >
                <Link to="/">Seguir Comprando</Link>
              </Button>
            </Flex>
          ) : (
            <ItemCount 
              stock={stockTalle}
              valorInicial={1} 
              onAdd={onAdd} 
              maxAvailable={maxAvailable}
              isDisabled={!selectedTalle || stockTalle === 0}
              resetCount = {resetCount}
            />
          )}
        </Flex>
        <ToastContainer />
      </Flex>
    </Flex>
  );
};

export default ItemDetail;
