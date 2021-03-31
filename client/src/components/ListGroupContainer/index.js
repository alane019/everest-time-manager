import React from 'react';
import ListGroupedByDate from '../ListGroupedByDate';
import { Container, Col, Row,ListGroup, ListGroupItem,
         ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

const ListGroupContainer = (props) => {
  return (
    <Container>
    <ListGroup>

      <ListGroupedByDate/>


      <ListGroupItem>
        <ListGroupItemHeading>March 27, 2021</ListGroupItemHeading>
        <ListGroupItemText>
           [Task Details   ...................................................................... ]
        </ListGroupItemText>
        <ListGroupItemText>
        [Task Details   ...................................................................... ]
        </ListGroupItemText>
        <ListGroupItemText>
        [Task Details   ...................................................................... ]
        </ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading>March 22, 2021</ListGroupItemHeading>
        <ListGroupItemText>
           [Task Details   ...................................................................... ]
        </ListGroupItemText>
      </ListGroupItem>
    </ListGroup>
    </Container>
  );
}

export default ListGroupContainer;