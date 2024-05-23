import React from 'react'
import Item from '../Item/Item'
import { Box, SimpleGrid } from '@chakra-ui/react'

const ItemList = ({productos}) => {

    

  return (
    <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={10} m={2}> 
        {
            productos.map((prod) => (
              <Box key={prod.id}>
                <Item {...prod} />
              </Box>
            ))
        }
    </SimpleGrid>
  )
}

export default ItemList