import React from "react";
import "../CSS/component.css";
import Card from "../components/card";
import { Row } from "reactstrap";

function layout() {
  return (
    <>
      <div className="header">hello</div>

      <div className="nav">hello</div>

      <div className="card">
        <Row>
          <Card
            title="card 1"
            subtitle="we will fix what goes here"
            test="test drive 1"
            imageUrl={require("../assets/event.png")}
          />

          <Card
            title="card 2"
            subtitle="this is second station"
            test="Test drive 2"
            imageUrl={require("../assets/event.png")}
          />
          <Card
            title="card 3"
            subtitle="This is third station"
            test="test drive 3"
            imageUrl={require("../assets/event.png")}
          />
        </Row>
      </div>
    </>
  );
}
export default layout;
