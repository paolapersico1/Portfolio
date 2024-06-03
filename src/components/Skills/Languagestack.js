import React from "react";
import { Col, Row } from "react-bootstrap";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../Assets/skills', false, /\.(png|jpe?g|svg)$/));

function Languagestack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>  
      <Col xs={4} md={2} className="tech-icons">
        <img src={images['python.svg']} className="tech-image" title="Python" alt="Python"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={images['js.svg'] } className="tech-image" title="JavaScript" alt="JavaScript"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={images['c-sharp.svg']} className="tech-image" title="C#" alt="C#"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={images['java.svg']} className="tech-image" title="Java" alt="Java"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={images['c.svg']} className="tech-image" title="C" alt="C"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={images['php.svg']} className="tech-image" title="PHP" alt="PHP"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={images['html.svg'] } className="tech-image" title="HTML" alt="HTML"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={images['css.svg']} className="tech-image" title="CSS" alt="CSS"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={images['sql.svg']} className="tech-image" title="SQL" alt="SQL"/>
      </Col>
    </Row>
  );
}

export default Languagestack;
