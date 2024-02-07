import React from "react";
import { Col, Row } from "react-bootstrap";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../Assets/skills', false, /\.(png|jpe?g|svg)$/));

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>  
      <Col xs={4} md={2} className="tech-icons">
        <img src={images['python.svg']} class="tech-image" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={images['js.svg'] } class="tech-image" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={images['c-sharp.svg']} class="tech-image"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={images['java.svg']} class="tech-image"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={images['c.svg']} class="tech-image"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={images['php.svg']} class="tech-image" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={images['html.svg'] } class="tech-image" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={images['css.svg']} class="tech-image"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={images['sql.svg']} class="tech-image"/>
      </Col>
    </Row>
  );
}

export default Techstack;
