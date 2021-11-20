import React from 'react';
import { Nav, Container } from 'react-bootstrap';

function Home() {
    return (
        <div className="home-header">
              <Container>
            <Nav variant="tabs" defaultActiveKey="/home">
              
                <Nav.Item>
                    <Nav.Link href="/home">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/art">Art</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/kkk">Active3</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                </Nav.Item>
               
            </Nav>
            </Container>
        </div>
    )
}

export default Home
