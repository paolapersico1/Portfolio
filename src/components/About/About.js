import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";

function About() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="orange"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a software developer based in Turin, Italy. 
              <br></br><br></br>
              I have always loved technology, so I studied <b className="orange">Computer Science</b> achieving a Master's Degree with full marks at University Alma Mater of Bologna. 
              <br></br><br></br>
              During my academic years, I have worked on 20+ (group and invidual) projects, learning a great number of programming languages, such as C, Java and Python, and exploring novel fields such as Machine Learning, VR/AR and Context-Aware Systems.
              <br></br><br></br>
              My professional experience began with an Erasmus Traineeship in UK at Global Voices Ltd and continued with an internship in Bologna at TicketSms Srl; in both companies I was mostly involved in <b className="orange">Back-end Web Development</b> in PHP. 
   
              <br></br><br></br>
              In my spare time, I like tinkering with Home Assistant, playing videogames and trekking.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt tiltReverse={true}>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default About;
