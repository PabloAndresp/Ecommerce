import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react'
import ShoppingCartContext from '../../Contexts/ShoppingCart/ShoppingCartContext.jsx'




 const ProductCard = ({product,productViewPath})=> {
  const shoppingCartCtx = useContext( ShoppingCartContext )
  const { addProduct } = shoppingCartCtx
  return (
    <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src={product.imageUrl} />
      <Card.Body>
        
        <Card.Title className='text-center'>{product.title}</Card.Title>
        <Card.Text className='text-center'>
          {}
        </Card.Text>
        </Card.Body>
        <Card.Body className='text-center'>
      
        <Card.Text className='text-center'>
          ${product.price} USD
        </Card.Text>
        <Button variant="primary" href={productViewPath}>Ver</Button>
        <Button variant="primary" onClick={ () => {
          addProduct( product )
        } }>Agregar </Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard