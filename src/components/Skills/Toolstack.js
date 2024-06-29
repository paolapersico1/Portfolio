import React from "react";
import { Col, Row } from "react-bootstrap";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../Assets/skills/tools', false, /\.(webp|png|jpe?g|svg)$/));

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={images['linux.svg']} className="tech-image" alt="Linux"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={images['git.svg']} className="tech-image" alt="Git"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={images['docker.svg']} className="tech-image" alt="Docker"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={images['slack.svg']} className="tech-image" alt="Slack"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={images['vscode.svg']} className="tech-image" alt="Visual Studio Code"/>
      </Col>
    </Row>
  );
}

export default Toolstack;
