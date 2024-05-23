import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Item = ({ marca, modelo, precio, img }) => {
  return (
    <Box 
      border="1px solid #E0E0E0"
      borderRadius="10px"
      p={4}
      transition="transform 0.3s, box-shadow 0.3s"
      _hover={{ transform: "translateY(-5px)", boxShadow: "lg", cursor: "Pointer" }}
      textAlign="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Image 
        src={img} 
        alt={`${marca} ${modelo}`} 
        borderRadius="md" 
        mb={4}
        objectFit="contain"
        boxSize="260px"
      />
      <Text fontFamily="Montserrat, sans-serif" fontWeight="600">
        {marca}
      </Text>
      <Text fontFamily="Montserrat, sans-serif" fontWeight="500" color="gray.500">
        {modelo}
      </Text>
      <Text fontFamily="Montserrat, sans-serif" fontWeight="bold" color="primary" mt={2}>
        ${precio}
      </Text>
    </Box>
  )
}

export default Item;
