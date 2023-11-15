import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container'; // Added Container to wrap content

function App() {
  return (
    <>

      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">New Movies</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Continue watching</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Suggestions
          </Nav.Link>
        </Nav.Item>
      </Nav>
<h1 style={{ textAlign: 'center', color: '#104C56', fontFamily: 'Arial', marginTop: '20px' }}>Houseflix</h1>

      <Container>
        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Title>Dad</Card.Title>
              <Card.Img variant="top" src= {require('./man1.png')} alt="dad" />
              <Card.Text>
              Check into Dad's profile!
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Log Out</small>
            </Card.Footer>
          </Card>
          <Card>
            
            
            <Card.Body>
              <Card.Title>Mom</Card.Title>
              <Card.Text>
                Check into Mom's profile!
              </Card.Text>
              <Card.Img variant="top" src= {require('./mom.png')} alt="mom" />
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Log Out</small>
            </Card.Footer>
          </Card>
          <Card>
          
            <Card.Body>
              <Card.Title>Peter </Card.Title>

              
              <Card.Img variant="top" src= {require('./child.png')} alt="peter" />
              <Card.Text>
            Check into Peter's account!    
                
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Log Out </small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Container>
    </>
  );
}

export default App;
