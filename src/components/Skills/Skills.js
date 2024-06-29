import React from "react";
import { Container } from "react-bootstrap";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Languagestack from "./Languagestack";
import { FormattedMessage } from 'react-intl';

function Skills() {
  return (
    <Container fluid className="skills-section" id="skills-section">
      <Container>
        <h1 className="project-heading">
          <strong className="orange"><FormattedMessage id="languages" defaultMessage="Languages" /></strong>
        </h1>
        <Languagestack />

        <h1 className="project-heading">
          <strong className="orange"><FormattedMessage id="frameworks" defaultMessage="Frameworks" /></strong> and <strong className="orange"><FormattedMessage id="platforms" defaultMessage="Platforms" /></strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="orange"><FormattedMessage id="tools" defaultMessage="Tools" /></strong>
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default Skills;
