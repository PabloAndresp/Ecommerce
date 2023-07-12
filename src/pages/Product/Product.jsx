import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react';
import { ProductView } from "../../componentes/ProductView/ProductView.jsx"
import axiosClient from '../../config/axios.jsx';


export const Product=()=>{
  const { productId } = useParams()
  // Llamar API para obtener un producto por id (/products/:id)
  const [ product, setProduct ] = useState( {} )
  useEffect( () => {
    const getProductFromDB = async () => {
      const axiosRes = await axiosClient.get( `/products/${ productId }` )
      setProduct( axiosRes.data )
    }
    try {
      getProductFromDB()
    } catch ( error ) {
      console.error( error )
    }
  }, [] )
  return (
    <ProductView className="mt-2" product={ product }></ProductView>
  )
}

export default Product

