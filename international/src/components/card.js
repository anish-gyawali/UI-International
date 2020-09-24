import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

function card({ title, subtitle, test, imageUrl }) {
  return (
    <Card>
      <CardImg src={imageUrl} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <CardText>{test}</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  );
}
export default card;
