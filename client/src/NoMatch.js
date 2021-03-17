import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>404 Page Not Found</h1>
            <br></br>
            <h1>
              <img aria-label="vincent-vega-lost-confused" alt="Vincent Vega" src="https://media.tenor.co/images/9f2d19ec75ddc830ba276cb24190e4b6/raw"></img>
            </h1>
            <br></br>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
