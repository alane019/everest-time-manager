import React from 'react';
import { Container, Col, Row, ListGroup, ListGroupItem,
         ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

const ListGroupedByDate = (props) => {
return (
   <div>
     {/* <!-- active example -->  */}
    <ListGroupItem active>
    <ListGroupItemHeading>March 29, 2021</ListGroupItemHeading>
    <ListGroupItemText>
        <Row>
          <Col>Task</Col> <Col>Project</Col> <Col>Start Time</Col> 
          <Col> End Time </Col>  <Col> Duration </Col>
        </Row>
      
        <Row>
          <Col>Jogging</Col> <Col> Exercise </Col> <Col> 11:05pm</Col>
          <Col> 1:10pm</Col> <Col>2:15</Col>
        </Row>          
    </ListGroupItemText>
    <hr></hr>
    <ListGroupItemText>
        <Row>
          <Col>Task</Col> <Col>Project</Col> <Col>Start Time</Col>
          <Col>End Time </Col>  <Col> Duration </Col>
        </Row>
        <Row>
          <Col>Jogging</Col> <Col> Exercise </Col> <Col> 11:05pm</Col>
          <Col> 1:10pm</Col> <Col>2:15</Col>
        </Row>          
    </ListGroupItemText>
    </ListGroupItem>
    {/* Inactive date example */}
    <ListGroupItem>
    <ListGroupItemHeading>March 27, 2021</ListGroupItemHeading>
    <ListGroupItemText>
        <Row>
          <Col>Task</Col> <Col>Project</Col> <Col>Start Time</Col> 
          <Col> End Time </Col>  <Col> Duration </Col>
        </Row>
      
        <Row>
          <Col>Jogging</Col> <Col> Exercise </Col> <Col> 11:05pm</Col>
          <Col> 1:10pm</Col> <Col>2:15</Col>
        </Row>          
    </ListGroupItemText>
    <hr></hr>
    <ListGroupItemText>
        <Row>
          <Col>Task</Col> <Col>Project</Col> <Col>Start Time</Col>
          <Col>End Time </Col>  <Col> Duration </Col>
        </Row>
        <Row>
          <Col>Jogging</Col> <Col> Exercise </Col> <Col> 11:05pm</Col>
          <Col> 1:10pm</Col> <Col>2:15</Col>
        </Row>          
    </ListGroupItemText>
    <hr></hr>
    <ListGroupItemText>
        <Row>
          <Col>Task</Col> <Col>Project</Col> <Col>Start Time</Col>
          <Col>End Time </Col>  <Col> Duration </Col>
        </Row>
        <Row>
          <Col>Jogging</Col> <Col> Exercise </Col> <Col> 11:05pm</Col>
          <Col> 1:10pm</Col> <Col>2:15</Col>
        </Row>          
    </ListGroupItemText>
    </ListGroupItem>
</div>);
}

export default ListGroupedByDate;