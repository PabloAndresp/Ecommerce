import { Col, Container, Row } from "react-bootstrap"
import ProductCard from "../../componentes/ProductCard/ProductCard.jsx"
import { useEffect, useState,useContext } from "react"
import axiosClient from "../../config/axios.jsx";
import UserContext from '../../Contexts/users/UserContext.jsx';

export const Products = ()=>{

  const userCtx= useContext( UserContext)
  const {user}= userCtx
  
  // llamada a la api para ver productos (/products)
  const [ products, setProducts]= useState([])
 // const products =[{
   // id: "1",
    //title: "Smartwatch Men1",
    //description: "Description",
    //price: 50444,
    //imageUrl:"https://www.reviewunfold.in/wp-content/uploads/2019/12/smart-watch-2022x2048.jpg"
  //},
  //{
    //id: "2",
    //title: "Smartwatch Men2",
    //description: "Description",
    //price: 50444,
    //imageUrl:"https://www.toptecnouy.com/imgs/productos/productos34_30673.jpg"
  //},
  //{
    //id: "3",
    //title: "Smartwatch Woman1",
    //description: "Description",
    //price: 50444,
    //imageUrl:"https://i5.walmartimages.com/asr/51bcf0cc-5d01-4e75-bee4-0062e2fa46ae.5500200724701a2bfdb0f722b23f09a6.jpeg"
  //},
  //{
   // id: "4",
    //title: "Smartwatch Woman2",
    //description: "Description",
    //price: 50444,
    //imageUrl:"https://images.timex.com/image/upload/q_auto,f_auto/w_1440,c_fit/Libraries/timexshared/images/category/Q2-2020/01069_WB19_iConnectWebsite_Homepage_Pro_Women-new.jpg"
  //},
  //{
   // id: "5",
    //title: "Smartphone Samsung1",
    //description: "Description",
    //price: 50444,
    //imageUrl:"https://th.bing.com/th/id/R.b55b85bffcf2035e541f8518be204ac6?rik=mi3Jr2UoWqVKWQ&riu=http%3a%2f%2faptgadget.com%2fwp-content%2fuploads%2f2015%2f08%2fMeet-the-Galaxy-S6-edge-and-Galaxy-Note5.-The-Next-Big-Thing-is-here..jpeg&ehk=YArX6uQxYzivwagNYZOfFdkY2DLQRWKmYw6ZUVrkrv4%3d&risl=&pid=ImgRaw&r=0"
  //},
  //{
   // id: "6",
    //title: "Smartphone Huawei1",
    //description: "Description",
    //price: 50444,
    //imageUrl:"https://www.toutici.ci/305-large_default/huawei-y9a-8-128gb-4300mah-64mpx.jpg"
  //},
  //{
   // id: "7",
    //title: "Alexa Echo 4 generacion",
    //description: "Description",
    //price: 50444,
    //imageUrl:"https://images.madeiramadeira.com.br/product/images/41196768-echodot-3-geracao-smart-speaker-preta15098-9406-3_zoom-410x410.jpg?width=600&canvas=600,600&bg-color=FFFFFF"
  //},
  //{
  //id: "8",
  //title: "Alexa Echo 5 generacion",
  //description: "Description",
  //price: 50444,
  //imageUrl:"https://cdn.webnews.it/JqnFW75UaGeNvQ-vyg3pvRyUjJ4=/630x630/smart/https://static.webnews.it/app/uploads/2020/09/nuovo-amazon-echo-05.jpg"
//},]
useEffect( () => {
  const getProductsFromDB = async ()=> {
    const axiosRes= await axiosClient.get ( '/products')
    setProducts( axiosRes.data )
  }
  try {
    getProductsFromDB()
  } catch ( error ) {
    console.error( error )
    alert( error.message )
  }
}, [] )
  return (
    <Container fluid>
      <Row>
        <Col>
        <h1>Catalogo de Productos  { user?.fullName || "" }</h1>
        </Col>
      </Row>
      <Row>
      {products.map(product => {
        return <Col key={ product._id }>
        <ProductCard product={product} productViewPath={`/products/${product._id}`}></ProductCard>
        </Col>
      })
    }
       
      </Row>
    </Container>
       
    
  )
}

export default Products