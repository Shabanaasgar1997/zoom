import react from "react";

import bannerStyles from "./mystyles.module.css";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import { Card, Col, Row, Button } from "react-bootstrap";
import Venu from "../assets/1.jpeg";

import { RiUserSharedFill, RiAnchorLine } from "react-icons/ri";

function Banner() {
  let venu = "venukumar";
  let x = { name: "virat" };

  const Container = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const Paragraph = styled.p`
    background-color: red;
    font-size: 25px;
  `;

  const Virat = styled.ul`
    display: flex;
    list-style: none;
  `;

  const Kohli = styled.li`
    padding: 10px;
  `;
  const Anushka = styled.a`
    text-decoration: none;
    font-size: 25px;
    font-family: arial;
  `;

  const Item = {
    width: "150px",
    height: "150px",
    backgroundColor: "brown",
    margin: "1px",
  };

  return (
    <>
      <div className="">
        <Row className="row">
          <Col className="col-lg-6">
            <Card style={{ width: "18rem" }} className="bg-danger p-lg-5">
              <Card.Img variant="top" src={Venu} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-lg-6">2</Col>
        </Row>
        <i class="fa-solid fa-user"></i>
        <RiUserSharedFill
          size={45}
          className="text-warning bg-dark rounded-circle"
        />
        <RiAnchorLine />
      </div>

      <img
        src={require("../assets/2.jpeg")}
        className="img-fluid w-25"
        alt=""
      />
      <img
        src={require("../assets/3.webp")}
        alt=""
        className="img-fluid w-25"
        roundedCircle
      />

      {/* <ul className={bannerStyles.nav}>
        <li>
          <a href="">Privacy Policy</a>
        </li>
        <li>
          <a href="">FAQ</a>
        </li>
        <li>
          <a href="">Career</a>
        </li>
      </ul>

      <Virat>
        <Kohli>
          <Anushka href="">About</Anushka>
        </Kohli>
        <Kohli>
          <Anushka href="">About</Anushka>
        </Kohli>
        <Kohli>
          <Anushka href="">About</Anushka>
        </Kohli>
        <Kohli>
          <Anushka href="">About</Anushka>
        </Kohli>
        <Kohli>
          <Anushka href="">About</Anushka>
        </Kohli>
        <Kohli>
          <Anushka href="">About</Anushka>
        </Kohli>
      </Virat>

      <div>
        <p
          style={{
            color: "red",
            fontSize: "25px",
            backgroundColor: "black",
            padding: "12px",
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente,
          accusantium.
        </p>
      </div>

      <div className="flex_Container" style={Container}>
        <div className="flex_item" style={Item}>
          1
        </div>
        <div className="flex_item" style={Item}>
          2
        </div>
        <div className="flex_item" style={Item}>
          3
        </div>
        <div className="flex_item" style={Item}>
          4
        </div>
        <div className="flex_item" style={Item}>
          5
        </div>
        <div className="flex_item" style={Item}>
          6
        </div>
        <div className="flex_item" style={Item}>
          7
        </div>
        <div className="flex_item" style={Item}>
          8
        </div>
        <div className="flex_item" style={Item}>
          9
        </div>
        <div className="flex_item" style={Item}>
          10
        </div>
      </div>

      <div className="container">
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          quis saepe nobis. Veniam provident doloremque inventore vel distinctio
          placeat sed quo ab consectetur possimus aspernatur soluta obcaecati
          nam perspiciatis neque eius molestiae atque autem laboriosam
          voluptatum ut, aliquid dolores. Voluptas ipsam beatae enim, ipsum
          dolorum laboriosam iste ad ullam aliquam?
        </Paragraph>
      </div>
      <button className="btn btn-danger">Click</button>
      <h1>dfvdsvdfvdv</h1> */}
    </>
  );
}

export default Banner;
