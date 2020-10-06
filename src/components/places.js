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

function Places () {

  const cardInfo = [
    {
      image: require("../assets/park1.jpeg"),
      title: "North Oak Park",
      text:
        "North Oak Park is the home for Lions Softball. Follow the above directions to reach campus and then travel one light past N. General Pershing to Oak Street. ",
      path:
        "https://www.google.com/maps/dir//30.523907,-90.4760433/@30.523907,-90.476043,16z?hl=en",
    },
    {
      image: require("../assets/park2.jpg"),
      title: "Zumurray park",
      text:
        "Neighborhood park featuring a playground, a pond, baseball, a gazebo, a skate park & more.",
      path:
        "https://www.google.com/maps/dir//Zemurray+park/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x862722c6976cbb15:0x5d57ef2427fb4c80?sa=X&ved=2ahUKEwjorobw8pvsAhXaK80KHbSYDi4Q9RcwFHoECBAQBA",
    },
    {
      image: require("../assets/park3.jpg"),
      title: "Northshore lakefront",
      text:
        "Grassy linear park along the shore of Lake Pontchartrain with a gravel path & gazebo.",
      path:
        "https://www.google.com/maps/dir//northshore+lakefront/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x862759f8275406a7:0x36daa3f2676e3962?sa=X&ved=2ahUKEwifzuiF85vsAhUWU80KHYI0BBsQ9RcwC3oECA8QBA",
    },

    {
      image: require("../assets/park4.jpg"),
      title: "Bogue Chitto Tubing Center",
      text:
        "Relax & go and Flo down the scenic Bogue Chitto River! They also offer Tubing, Kayaking, & Canoeing.",
      path:
        "https://www.google.com/maps/dir//bogue+chitto+tubing+center/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x86276281feab65f5:0x3d51e9fff551745c?sa=X&ved=2ahUKEwj9jPSZ85vsAhURHs0KHZ12DIQQ9RcwDHoECBEQBQ",
    },
  ];
  const renderCard = (card, index) => {
    return (
      <Card
        style={{ width: "18rem" }}
        key={index}
        className="shadow p-2 mb-6 bg-white rounded"
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
      <div className="PlaceTitle">Places you might like to visit</div>
      <div className="grid">{cardInfo.map(renderCard)}</div>
    </>
  );
};

export default Places;
