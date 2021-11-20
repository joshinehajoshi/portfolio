import React from 'react';
import '../css/home.css';
import { Nav, Container } from 'react-bootstrap';

function Home() {
    return (
        <div className="home-header">
              <Container>
            <Nav variant="tabs" defaultActiveKey="/home">
              
                <Nav.Item>
                    <Nav.Link className="active" href="/home">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="active" href="/art">Art</Nav.Link>
                </Nav.Item>
               
            </Nav>
            </Container>
        </div>
    )
}

export default Home
