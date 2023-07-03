import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


function Home() {
  return (
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://static.wixstatic.com/media/ab5875_f032065290e14564ae566e1a0e8a3719~mv2.png/v1/fit/w_1000%2Ch_1000%2Cal_c/file.png"
        alt="First slide"
        height="600px"
      />
      <Carousel.Caption>
        <h3>Smartwatchs  </h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
     
      <img
        className=" w-100 d-block "
        src="https://segredosdomundo.r7.com/wp-content/uploads/2020/09/alexa-o-que-ou-quem-e-como-funciona-essa-tecnologia.jpeg"
        alt="Second slide"
        height="600px"
        
       
        
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
        height="600px"
      />

      <Carousel.Caption>
        <h3>Ipad y Tablets</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default Home;