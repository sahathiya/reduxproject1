import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { removecart } from '../features/cartSlice';
function Cart() {
  const mycart=useSelector(state=>state.cart.value)
  const dispatch=useDispatch()


  const removeCart=(id)=>{
    dispatch(removecart(id))

  }
  return (
    <Container className="mt-4">
        <Row>
          {mycart.map((item) => (
            <Col sm={6} md={4} lg={3} key={item.id} className="mb-4">
              <Card className="h-100">
                <Card.Img 
                  variant="top" 
                  src={item.image} 
                  style={{ height: '200px', objectFit: 'contain' }} 
                  alt={item.title} 
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>${item.price}</Card.Text>
                </Card.Body>
                <Button onClick={()=>removeCart(item.id)} variant='danger' style={{width:'200px',marginLeft:'30px',marginBottom:'20px'}}>Remove</Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
  )
}

export default Cart
