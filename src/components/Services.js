import React from "react";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";

import "../components/component.css";

const Services = () => {
  const cardInfo = [
    { image: require("../assets/bank.png"), title: "Bank", text: "Have you created bank account? If not then check it out what you need to do." ,path:'http://www.southeastern.edu/admin/international/current_students/practical_matters/bank/index.html'},
    { image: require("../assets/housing.png"), title: "Housing", text: "Don't want to stay On-Campus dorm? Do you need help for off-campus housing." ,path:'https://www.forrentuniversity.com/Southeastern-Louisiana-University'},
    { image: require("../assets/iso.png"), title: "International Student Resource", text: "you may like to check International Student resource." ,path:'https://www.southeastern.edu/admin/international/virtual_center/index.html'},

    {
      image: require("../assets/job.png"),
      title: "On-Campus Job",
      text: "Do you want to get extra pocket money ? or Interested for On-Campus Job for international student ?",
      path:'http://www.southeastern.edu/current_students/sen/index.html'
    },
  ];
  const renderCard = (card, index) => {
    return (
      
      <Card
        style={{ width: "18rem" }}
        key={index}
      >
        <div className="inner">
          <CardImg
            variant="top"
            width="100%"
            alt="Card image cap"
            src={card.image}
          />
        </div>
        <CardBody>
          <CardTitle><b>{card.title}</b></CardTitle>

          <CardText>{card.text}</CardText>
          <Button className="sbutton"><a href={card.path}>Get details</a></Button>
        </CardBody>
      </Card>
      
    );
  };
  return (
    <>
   <div className="SeviceTitle">
     Quick Checklist for Freshman International Students:

      </div>
      <div className="grid">{cardInfo.map(renderCard)}</div>
      </>
  );
};

export default Services;
