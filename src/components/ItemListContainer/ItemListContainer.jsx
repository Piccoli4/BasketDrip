import React, { useEffect, useState } from 'react';
import { Box, Flex, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { FaAngleDown } from 'react-icons/fa6';
import ItemList from '../ItemList/ItemList';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../config/firebase';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { markId } = useParams();

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const coleccion = collection(db, 'productos');
        const queryRef = markId ? query(coleccion, where('marca', '==', markId)) : coleccion;
        const response = await getDocs(queryRef);
        const productos = response.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        const filteredProducts = productos.reduce((acc, current) => {
          const x = acc.find((item) => item.marca === current.marca && item.modelo === current.modelo);
          if (!x) {
            return acc.concat([current]);
          }
          return acc;
        }, []);

        // Calcula si un producto está sin stock
        const productosConStock = filteredProducts.map(producto => {
          const totalStock = productos
            .filter(prod => prod.marca === producto.marca && prod.modelo === producto.modelo)
            .reduce((acc, prod) => acc + prod.stock, 0);
          return {
            ...producto,
            outOfStock: totalStock === 0,
          };
        });

        // Ordena los productos para que los que esten sin stock aparezcan al final de la lista
        const sortedProductos = productosConStock.sort((a, b) => a.outOfStock - b.outOfStock);

        setProductos(sortedProductos);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    getData();
  }, [markId]);

  return (
    <Box>
      <Flex align="center">
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<FaAngleDown />}
            backgroundColor={'#FF6F00'}
            w={'200px'}
            borderRadius={'none'}
            fontFamily={'Montserrat, sans-serif'}
            fontWeight={'800'}
          >
            Marcas
          </MenuButton>
          <MenuList fontFamily={'Montserrat, sans-serif'} fontWeight={'900'}>
            <MenuItem fontFamily={'Montserrat, sans-serif'} fontWeight={'600'}>
              <Link to="/marca/Nike">Nike</Link>
            </MenuItem>
            <MenuItem fontFamily={'Montserrat, sans-serif'} fontWeight={'600'}>
              <Link to="/marca/Adidas">Adidas</Link>
            </MenuItem>
            <MenuItem fontFamily={'Montserrat, sans-serif'} fontWeight={'600'}>
              <Link to="/marca/Under_Armor">Under Armor</Link>
            </MenuItem>
            <MenuItem fontFamily={'Montserrat, sans-serif'} fontWeight={'600'}>
              <Link to="/marca/361">361°</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      {loading ? (
        <Flex justify="center" align="center" h="75vh">
          <Spinner />
        </Flex>
      ) : (
        <ItemList productos={productos}/> 
      )}
    </Box>
  );
};

export default ItemListContainer;
