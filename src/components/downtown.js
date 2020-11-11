import React from "react";
//import ReadMoreAndLess from "react-read-more-less";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";


import "../components/component.css";

function Downtown () {

  const cardInfo = [
    {
      image: require("../assets/mariner.PNG"),
      title: "Mariner's Inn",
      text:
        "Enduring, family-friendly eatery with traditional American fare, live music, beer & cocktails.",
      path:
        "https://www.google.com/maps/dir//downtown+hammond+restaurants/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x862722c787eba1b3:0x2b50ce56c6962aa7?sa=X&ved=2ahUKEwivn-javvrsAhV6F1kFHW6_B_IQ9RcwAHoECAYQBQ",
    },
    {
      image: require("../assets/TopeLa.PNG"),
      title: "Tope La Restaurant",
      text:
        "This comfortable, brick-lined standby with sidewalk seating features a unique, Louisiana-style menu.",
      path:
        "https://www.google.com/maps/dir/30.5168384,-90.4691712/downtown+hammond+restaurants/@30.5106249,-90.4692206,16z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x862722b80c80892d:0xa2e7f7518c8d870f!2m2!1d-90.4604936!2d30.5044654!3e2",
    },
    {
      image: require("../assets/Japanese.PNG"),
      title: "Kirin Japanese Cuisine",
      text:
        "Japanese eatery crafting quality sushi in a polished setting with hibachi tables & a martini bar.",
      path:
        "https://www.google.com/maps/dir/30.5168384,-90.4691712/downtown+hammond+restaurants/@30.509695,-90.4689682,16z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x862722c7dd96c2ef:0xc50e2b9d29e9520e!2m2!1d-90.4599889!2d30.5025917!3e2",
    },

    {
      image: require("../assets/Indian.PNG"),
      title: "Punjabi Dhaba Indian cuisine",
      text:
        "Indian food with different asian food. Also provide food for diffrent party and any other function.",
      path:
        "https://www.google.com/maps/dir/30.5168384,-90.4691712/downtown+hammond+indian+restaurants/@30.4968903,-90.4818605,14z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x8627232916555555:0x55e9ea87ae6bb037!2m2!1d-90.4566798!2d30.4769446!3e2",
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
          <CardTitle>
            <b>{card.title}</b>
          </CardTitle>

          <CardText>
          
                {card.text}
           
          </CardText>
          <Button className="sbutton">
            <a href={card.path}>Get Direction</a>
          </Button>
        </CardBody>
      </Card>
    );
  };
  return (
    <>
      <div className="PlaceTitle">Restaurant  nearby University</div>
      <div className="grid">{cardInfo.map(renderCard)}</div>
    </>
  );
};

export default Downtown;
