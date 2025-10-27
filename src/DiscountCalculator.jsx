import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

function DiscountCalculator() {
    const [amount, setAmount] = useState("");
  const [discount, setDiscount] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  const handleCalculate = () => {
    if (amount === "" || discount === "") {
      alert("Please enter both amount and discount percentage");
      return;
    }
    const discAmt = (amount * discount) / 100;
    const finalAmt = amount - discAmt;
    setDiscountAmount(discAmt.toFixed(2));
    setFinalPrice(finalAmt.toFixed(2));
  };

  const handleReset = () => {
    setAmount("");
    setDiscount("");
    setDiscountAmount(0);
    setFinalPrice(0);
  };
  return (
    <div>
        
      <h1 className="text-center mb-4 fw-bold text-light mt-5">
        Discount Calculator
      </h1>
      <p className="text-center fw-bold text-light mt-2">"Calculate your savings in seconds! The ultimate discount calculator at your fingertips."</p>
      <Container className="mt-5" style={{height:'600px',borderRadius:'10px',backgroundColor:'rgb(69, 83, 85)'}}>

      <Row className="justify-content-center mt-5">
        {/* Input Section */}
        <Col md={5}>
          <Card className="p-4 shadow-sm mt-5" style={{height:'400px'}}>
            <div style={{textAlign:'center'}}>
                <img src="https://i.pinimg.com/564x/2d/7d/68/2d7d6855709e85cadc9fc7166416f214.jpg" alt="" style={{width:'100px'}} />
            </div>
            
            <Form className="text-center">
              <Form.Group className="mb-3 mt-3">
                <Form.Label>Amount(₹)</Form.Label>
                <Form.Control
                  type=""
                  placeholder="Enter Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Discount(%)</Form.Label>
                <Form.Control
                  type=""
                  placeholder="Enter Discount"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                />
              </Form.Group>

              <div className="d-flex justify-content-evenly mt-5">
                <Button variant="secondary" onClick={handleCalculate}>
                  CALCULATE
                </Button>
                <Button variant="secondary" onClick={handleReset}>
                  RESET
                </Button>
              </div>
            </Form>
          </Card>
        </Col>

        {/* Output Section */}
        <Col md={5}>
          <Card className="p-4 shadow-sm bg-light mt-5" style={{height:'400px'}}>
            <div style={{textAlign:'center'}}>
                <img src="https://cdn.dribbble.com/users/2613050/screenshots/7347945/discount_logo.gif" alt="" style={{height:'100px'}} />
            </div>
            <Card.Title className="text-center mb-3 mt-3"><h3>Amount Paid</h3></Card.Title>
            <div className="text-center">
                <h4>New Price</h4>
                <h4>₹{finalPrice}</h4>
            </div>
            <div className="mb-3 d-flex justify-content-between text-center">
                <div>
                <h4>Amount Saved</h4>
                <h4>₹{discountAmount}</h4>
                </div>
                <div>
                <h4>Price Difference</h4>
                <h4>₹{discountAmount}</h4>

                </div>
                
              
            </div>
            
          </Card>
        </Col>
      </Row>
    </Container>
      
    </div>
  )
}

export default DiscountCalculator
