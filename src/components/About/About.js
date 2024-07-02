import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.webp";
import Tilt from "react-parallax-tilt";
import { FormattedMessage } from 'react-intl';

function About() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <FormattedMessage id="letmeintroducemyself" defaultMessage="LET ME INTRODUCE MYSELF" />
            </h1>
            <p className="home-about-body">
              <FormattedMessage id="about1" defaultMessage="I am a software developer based in Turin, Italy." />
              <br></br><br></br>
              <FormattedMessage id="about2" defaultMessage="I have always loved technology, so I studied " />
              <b className="orange"><FormattedMessage id="about3" defaultMessage="Computer Science" /></b><FormattedMessage id="about4" defaultMessage=" achieving a Master's Degree with full marks at University Alma Mater of Bologna. " />
              <br></br><br></br>
              <FormattedMessage id="about5" defaultMessage="During my academic years, I have worked on 20+ (group and invidual) projects, learning a great number of programming languages, such as C, Java and Python, and exploring novel fields such as Machine Learning, VR/AR and Context-Aware Systems. " />
              <br></br><br></br>
              <FormattedMessage id="about6" defaultMessage="My professional experience began with an Erasmus Traineeship in UK at Global Voices Ltd and continued with an internship in Bologna at TicketSms Srl; in both companies I was mostly involved in "/>
              <b className="orange"><FormattedMessage id="about7" defaultMessage="Back-End Web Development." /></b>
              
   
              <br></br><br></br>
              <FormattedMessage id="about8" defaultMessage="In my spare time, I like contributing to Open Source projects, tinkering with Home Assistant, playing videogames and trekking." />
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
