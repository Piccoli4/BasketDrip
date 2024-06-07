import React from 'react';
import { Box, Heading, Text, Button, Image, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import errorImage from '../../assets/error404.jpg';

const PageNotFound = () => {
  return (
    <Center minH="90vh" bg="gray.100">
      <Box textAlign="center" py={10} px={6} fontFamily={'Permanent Marker'}>
        <Image
          src={errorImage}
          alt="Error 404"
          mx="auto"
          mb={4}
          w={'35%'}
        />
        <Text fontSize="lg" color="gray.600" mb={6}>
          Lo sentimos, la página que buscas no existe.
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
            Volver al inicio
          </Button>
        </Link>
      </Box>
    </Center>
  );
};

export default PageNotFound;
