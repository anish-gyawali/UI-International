import React from 'react';
import { Button, Card } from 'reactstrap';
import '../components/component.css';

function CardItem(props) {
  return (
    <>
      <Card className="cardSection">
          {props.title}
          
      </Card>
    </>
  );
}

export default CardItem;