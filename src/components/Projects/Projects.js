import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import tmd from "../../assets/projects/tmd.webp";
import bolofence from "../../assets/projects/bolofence.webp";
import cloudchain from "../../assets/projects/cloudchain.webp";
import converso from "../../assets/projects/converso.webp";
import embodiment from "../../assets/projects/embodiment.webp";
import unipoly from "../../assets/projects/unipoly.webp";
import conversoPdf from "../../assets/../assets/projects/converso.pdf";
import bolofencePdf from "../../assets/../assets/projects/bolofence.pdf";
import cloudchainPdf from "../../assets/../assets/projects/cloudchain.pdf";
import embodimentvrPdf from "../../assets/../assets/projects/embodimentvr.pdf";
import tmdPdf from "../../assets/../assets/projects/tmd.pdf";
import { FormattedMessage, useIntl } from 'react-intl'; 

function Projects() {
  const intl = useIntl();
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="orange"><FormattedMessage id="projects/" defaultMessage="Projects" /></strong>
        </h1>
        <p style={{ color: "white" }}>
          <FormattedMessage id="projectdesc" defaultMessage="Here are a few projects/ I've worked on." />
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={converso}
              tags={['python', 'scikit-learn', 'nltk']}
              isBlog={false}
              title="Converso"
              description={intl.formatMessage({ id: 'conversodesc' })}
              ghLink="https://github.com/paolapersico1/converso"
              demoLink={conversoPdf}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bolofence}
              tags={['java', 'codeigniter', 'postgis']}
              isBlog={false}
              title="BoloFence"
              description={intl.formatMessage({ id: 'bolofencedesc' })}
              ghLink="https://github.com/paolapersico1/BoloFence"
              demoLink={bolofencePdf}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloudchain}
              tags={['expressjs', 'solidity', 'truffle']}
              isBlog={false}
              title="CloudChain"
              description={intl.formatMessage({ id: 'cloudchaindesc' })}
              ghLink="https://github.com/paolapersico1/cloud-chain"
              demoLink={cloudchainPdf}             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tmd}
              tags={['python', 'scikit-learn', 'pytorch']}
              isBlog={false}
              title="Transport-Mode-Detection"
              description={intl.formatMessage({ id: 'tmddesc' })}
              ghLink="https://github.com/paolapersico1/Transport-Mode-Detection"
              demoLink={tmdPdf}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={embodiment}
              tags={['C#', 'unity', 'openXR']}
              isBlog={false}
              title="Embodiment&BodySwap VR"
              description={intl.formatMessage({ id: 'embodimentdesc' })}
              ghLink="https://github.com/stars/paolapersico1/lists/embodiment-bodyswap"
              demoLink={embodimentvrPdf}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={unipoly}
              tags={['C#', 'UML', '.NET']}
              isBlog={false}
              title="Unipoly"
              description={intl.formatMessage({ id: 'unipolydesc' })}
              ghLink="https://github.com/paolapersico1/Unipoly"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
