import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import "./App.css";
import { Wilder } from "./components/wilder/wilder";
import wilders from "./data.json";

function App() {
  return (
    <div>
      <header>
          <Row>
            <Col md>
              <h1>Wilders Book</h1>
            </Col>
          </Row>
      </header>
      <body>
        <Container fluid>
          <Row>
            <h2>Wilders</h2>
          </Row>
          <Row>
            {wilders.map(data => (
              <Col md={4} className="mb-5" key={`{data.id}`}>
                <Wilder data={data}/>
              </Col>
            ))}
          </Row>
        </Container>
      </body>
      <footer>
        <div className="container">
          <p>&copy; 2020 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;