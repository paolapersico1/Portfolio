import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homepic from "../../assets/home.webp";
import Particle from "../Particle";
import Type from "./Type";
import { FormattedMessage } from 'react-intl';

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading">
                <FormattedMessage id="greeting" defaultMessage="Hello world!" />
              </h1>

              <h1 className="heading-name">
                <FormattedMessage id="iam" defaultMessage="I am" />
                <strong className="main-name"> PAOLA PERSICO</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} className="home-pic-div">
              <img
                src={homepic}
                alt="home pic"
                className="img-fluid home-pic"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
