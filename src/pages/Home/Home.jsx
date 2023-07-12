import {Children, useContext, useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import UserContext from '../../Contexts/users/UserContext.jsx';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import './Home.css'
import { Navigate } from 'react-router-dom';

function Home() {

  const userCtx = useContext( UserContext )
  const { user, verifyingToken, authStatus } = userCtx
  

 



  return (

    <Container>
      <Container>
      <h1>{ `Bienvenido ${ user?.fullName || "" }` }</h1>
    <Carousel>
    <Carousel.Item>
      <img
        className="s w-100"
        src="https://static.wixstatic.com/media/ab5875_f032065290e14564ae566e1a0e8a3719~mv2.png/v1/fit/w_1000%2Ch_1000%2Cal_c/file.png"
        alt="First slide"
        height="400px"
        width= "200px"
      />
      <Carousel.Caption>
        <h3>Smartwatchs  </h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    
      <img
        className=" d-block w-100"
        src="https://segredosdomundo.r7.com/wp-content/uploads/2020/09/alexa-o-que-ou-quem-e-como-funciona-essa-tecnologia.jpeg"
        alt="Second slide"
        height="400px"
        width="200px"
        
       
        
      />
      
      <Carousel.Caption>
        <h3>Alexa de Amazon</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://mondrian.mashable.com/2016%252F03%252F21%252F89%252Fipdcompr098.1811a.jpg%252F950x534__filters%253Aquality%252880%2529.jpg"
        alt="Third slide"
        height="400px"
        width="200px"
      />

      <Carousel.Caption>
        <h3>Ipad y Tablets</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </Container>
<section>
  <Container fluid>
<Row>
  <Col xs={6} md={6}>
    <Image src="holder.js/500x500" roundedCircle />
  </Col>
  <Col xs={6} md={6}>
    <Image src="holder.js/500x500" roundedCircle />
  </Col>
  <Col xs={6} md={6}>
    <Image src="holder.js/500x500"  roundedCircle/>
  </Col>
</Row>
</Container>
</section>
  </Container>


  )
}

export default Home