import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'
import Spinner from '../Spinner/Spinner'
import ItemDetail from '../ItemDetail/ItemDetail'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'

const ItemDetailContainer = () => {
    const [ producto, setProducto ] = useState()
    const [ loading, setLoading ] = useState(true)
    const { productId } = useParams()

    useEffect(() => {
        const getData = async () => {

            // Se obtiene la referencia a un producto en específico
            const queryRef = doc(db, 'productos', productId)
            
            // Se obtiene el documento (producto)
            const response = await getDoc(queryRef)

            // Se crea el objeto con la data y el id
            const newItem = {
                ...response.data(), 
                id: response.id
            }
            setProducto(newItem)
            setLoading(false)
        }

        getData()
    },[])

  return (
    <>
        {
            loading ?
            <Flex justify={'center'} align={'center'} h={'75vh'}>
                <Spinner />
            </Flex>
            :
            <ItemDetail {...producto} />
        }
    </>
  )
}

export default ItemDetailContainer
