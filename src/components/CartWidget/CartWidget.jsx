import { Box, Flex } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { BsCart4 } from "react-icons/bs";
import Context from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { getQuantity } = useContext(Context);

  return (
    <Box m={4} fontSize={'55px'}>
      <Link to='/cart'>
        <Flex
          align="center"
          justify="center"
          position="relative"
        >
          <BsCart4 />
          { getQuantity() > 0 && (
            <Box
              color={'#fff'}
              fontSize={'23px'}
              textAlign={'center'}
              paddingLeft={'.5'}
              paddingBottom={'1.5'}
              fontWeight={'bold'}
              textShadow={'2.5px 1.5px 2px #000'}
              position={'absolute'}
            >
              {getQuantity() }
            </Box>
          )}
        </Flex>
      </Link>
    </Box>
  )
}

export default CartWidget;
