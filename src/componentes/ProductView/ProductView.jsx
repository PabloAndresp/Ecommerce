import { Button,Col,Container, Image, Row } from "react-bootstrap"

export const ProductView =({product})=>{
    return (
        <Container fluid style= {{ marginTop: 60}}>
            <Row>
                <Col xs={12} sm={12} md={6} style={{ textAlign: "center"}}>
                <Image src={product.imageUrl} width={500} height={500} fluid>
                </Image>
                </Col>
                <Col xs={12} sm={12} md={6}>
                <Row style= {{ gap: 40}}>
                    <Col xs={12} sm={12} md={12}>{product.title}</Col>
                    <Col xs={12} sm={12} md={12}>{product.description}</Col>
                    <Col xs={12} sm={12} md={12}>{product.price}</Col>
                </Row>
                <Row >
                    <Col >
                    <Button>Agregar al carrito</Button>
                    
                  </Col>
                  </Row>
                  <Row >
                    <Col >
                    <Button>Comprar</Button>
                    </Col>
                </Row>
                </Col>
            </Row>
        </Container>

    )
}