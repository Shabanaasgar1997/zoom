import React from "react";
import { Button, Card } from "react-bootstrap";

import mystyles from "../Components/mystyles.module.css";

import "../Components/Navbar.css";

function Home(props) {
  console.log(props.prop1);
  return (
    <>
      <h1>welcome to the homepage</h1>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title className={mystyles.venu}>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <button className="btn btn-danger" onClick={props.prop1}>
        Click
      </button>
    </>
  );
}

export default Home;
