import React from 'react';
import { Button, Card } from 'reactstrap';
import '../components/component.css';

function CardItem(props) {
  return (
    <>
      <Card >
          {props.title}
          
      </Card>
    </>
  );
}

export default CardItem;