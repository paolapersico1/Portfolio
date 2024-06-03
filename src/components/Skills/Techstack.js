import React from "react";
import { Col, Row } from "react-bootstrap";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../Assets/skills', false, /\.(png|jpe?g|svg)$/));

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>  
      <Col xs={4} md={2} className="tech-icons">
        <img src={images['sklearn.svg']} className="tech-image" title="Scikit-learn" alt="Scikit-learn"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={images['nodejs.svg'] } className="tech-image" title="NodeJS" alt="NodeJS"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={images['unity.png']} className="tech-image" title="Unity" alt="Unity"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={images['codeigniter.svg']} className="tech-image" title="CodeIgniter" alt="CodeIgniter"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={images['bootstrap.svg']} className="tech-image" title="Bootstrap" alt="Bootstrap"/>
      </Col>
    </Row>
  );
}

export default Techstack;
