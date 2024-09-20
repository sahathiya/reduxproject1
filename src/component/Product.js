import React,{useEffect} from 'react'
// import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
import { addcart } from '../features/cartSlice';
import { getProducts } from '../features/productSlice';

function Product() {
   
  const dispatch=useDispatch()
  const productdata=useSelector(state=>state.products.value)
    
   useEffect(()=>{
    
     dispatch(getProducts())
   },[dispatch])
   
   const addToCart=(item)=>{
    dispatch(addcart(item))
   }
    return (

      <Container className="mt-4">
        <Row>
          {productdata.map((item) => (
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
                <Button onClick={()=>addToCart(item)} variant='primary'   style={{width:'200px',marginLeft:'30px',marginBottom:'20px'}}>Add To Cart</Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
  )
}

export default Product
