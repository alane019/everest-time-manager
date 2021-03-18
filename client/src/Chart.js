import React from "react";
import { Col, Row, Container } from "./components/Grid";
import Jumbotron from "./components/Jumbotron";

function Chart() {
  var imageName = require("./Graph.jpg");
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>
              <img
                aria-label="Chart"
                alt="Chart"
                src={imageName}/>
            </h1>
            <br></br>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Chart;