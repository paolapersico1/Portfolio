import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Languagestack from "./Languagestack";

function Skills() {
  return (
    <Container fluid className="skills-section" id="skills-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="orange">Languages</strong>
        </h1>
        <Languagestack />

        <h1 className="project-heading">
          <strong className="orange">Frameworks</strong> and <strong className="orange">Platforms</strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="orange">Tools</strong>
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default Skills;
