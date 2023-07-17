import React from 'react'
import ProductCard from "../ProductCard/ProductCard.jsx"
import { Container, Row,Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'


function ProductOfertas () {
  
  
    const products =[
      { 
        id: "1",
        title: "Tablet HP Omni 10",
        description: "Description",
        price: 80,
        imageUrl:"https://betanews.com/wp-content/uploads/2014/05/HP-Omni-10-2-600x597.jpg"
      },
      {
        id: "2",
        title: "Tablet Samsung Galaxy tab 4 10.1",
        description: "Description",
        price: 89,
        imageUrl:"https://www.product-reviews.net/wp-content/uploads/galaxy-tab-4-10-review.jpg"
      },
      {
        id: "3",
        title: "Sony Xperia Z Tablet",
        description: "Description",
        price: 99,
        imageUrl:"https://th.bing.com/th/id/R.77de92a135197ce8b4edcfa6b816d06b?rik=0kM3bFigVsvB8Q&riu=http%3a%2f%2fwww.razzil.com%2fimages%2fsony-xperia-tablet-z.jpg&ehk=uh93FUqNvB2W8fFcZKd%2fJBKoFYnCD%2fOaGfj%2bOJqnNro%3d&risl=&pid=ImgRaw&r=0"
      },
      {
        id: "6",
        title: "Microfono Nox Krom Kapsule",
        description: "Description",
        price: 25,
        imageUrl:"https://cdn.weasy.io/users/jpdi-rep/catalog/21169778_80496400_9593223891.jpg"
      },
      {
        id: "5",
        title: "Microfono Gamer YperX QuadCast S con RGB",
        description: "Description",
        price: 19,
        imageUrl:"https://dust2.gg/wp-content/uploads/2021/06/3-e0953986-abfc-471a-a227-e8b426893fd7-1-768x768.png"
      },
      {
        id: "4",
        title: "Microfono usb Moono  ",
        description: "Description",
        price: 10,
        imageUrl:"https://th.bing.com/th/id/OIP.s495uZCrlITmfL1s2F3K3wHaHa?pid=ImgDet&w=700&h=700&rs=1"
      },
      {
        id: "7",
        title: "Audifonos bluetooth",
        description: "Description",
        price: 19,
        imageUrl:"https://images.evo.com/imgp/enlarge/41292/242325/beats-by-dre-beats-studio-hd-headphones-black.jpg"
      },
      {
      id: "8",
      title: "Audifonos bluetooth S2K negros",
      description: "Description",
      price: 10,
      imageUrl:"https://http2.mlstatic.com/D_NQ_NP_940929-CBT41943127812_052020-F.jpg"
    },

    ]
    const {productId}= useParams()
    const product =products.find( product => product.id === productId)
  

return (

     
        <Container fluid>
         
          <Row>
          {products.map(product => {
            return <Col key={ product._id }>
            <ProductCard product={product}productViewPath={ `/products/${ product._id }` }  ></ProductCard>
            
            </Col>
          })
        }
           
          </Row>
        </Container>
           
        
      
    
)
    }
export default ProductOfertas