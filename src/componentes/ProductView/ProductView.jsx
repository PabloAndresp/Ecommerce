import { Container } from "react-bootstrap"

export const ProductView =({product})=>{
    return (
        <Container>
            <Row>
                <Col>
                <Image src={product.imageUrl}>
                </Image>
                </Col>
                <Col>
                <Row>
                    <Col>{product.title}</Col>
                    <Col>{product.description}</Col>
                    <Col>{product.price}</Col>
                </Row>
                </Col>
            </Row>
        </Container>

    )
}