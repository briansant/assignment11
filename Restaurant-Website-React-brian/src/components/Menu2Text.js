import React from 'react';
import one from '../image/ff.jpg';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Menu2Text() {
  return (
    <div >
      <br />
      <br />
      <br />
      <Row xs={1} md={2} lg={3} className="g-4 container-fluid mx-auto justify-content-center ">
        {Array.from({ length: 3 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <img src={one} alt="pic" className="card-img" />
              <Card.Body>
                <Card.Title>Nuggets</Card.Title>
                <Card.Text>
                  <br />
                  <br />
                  <span className='font-weight-bold '>Price : $ 100 </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <br />
      <br />
    </div>
  );
}
export default Menu2Text;