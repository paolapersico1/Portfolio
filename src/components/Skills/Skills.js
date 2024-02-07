import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function Skills() {
  return (
    <Container fluid className="skills-section" id="skills-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Languages</strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong>
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default Skills;
