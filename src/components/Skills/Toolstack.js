import React from "react";
import { Col, Row } from "react-bootstrap";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../Assets/skills', false, /\.(png|jpe?g|svg)$/));

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={images['linux.svg']} class="tech-image" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={images['git.svg']} class="tech-image" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={images['docker.svg']} class="tech-image" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={images['slack.svg']} class="tech-image" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={images['vscode.svg']} class="tech-image" />
      </Col>
    </Row>
  );
}

export default Toolstack;
