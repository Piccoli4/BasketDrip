import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'
import Spinner from '../Spinner/Spinner'
import ItemDetail from '../ItemDetail/ItemDetail'
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../config/firebase'
import Context from '../../context/CartContext'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null) // Inicializado como null para indicar que no hay producto cargado
    const [productosSimilares, setProductosSimilares] = useState([])
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    const { currentQuantity } = useContext(Context)

    useEffect(() => {
        const getData = async () => {
            try {
                // Se obtiene la referencia a un producto en específico
                const queryRef = doc(db, 'productos', productId)
                
                // Se obtiene el documento (producto)
                const response = await getDoc(queryRef)

                if (response.exists()) {
                    // Se crea el objeto con la data y el id
                    const productoData = response.data(); // Guardar los datos del producto en una variable

                    const newItem = {
                        ...productoData,
                        id: response.id
                    }
                    setProducto(newItem)

                    // Obtiene productos similares
                    const productosRef = collection(db, 'productos')
                    const q = query(productosRef, where('marca', '==', productoData.marca), where('modelo', '==', productoData.modelo))
                    const querySnapshot = await getDocs(q)
                    const similares = querySnapshot.docs.map(doc => ({
                        ...doc.data(),
                        id: doc.id
                    }))
                    setProductosSimilares(similares)
                } 

                setLoading(false)
            } catch (error) {
                setLoading(false); // El estado de carga se establece en falso en caso de error
            }
        }

        getData()
    }, [productId])

    return (
        <>
            {loading ? (
                <Flex justify={'center'} align={'center'} h={'75vh'}>
                    <Spinner />
                </Flex>
            ) : (
                <ItemDetail {...producto} productosSimilares={productosSimilares} currentQuantity={currentQuantity(productId)} />
            )}
        </>
    )
}

export default ItemDetailContainer
