import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tmd from "../../Assets/Projects/tmd.png";
import bolofence from "../../Assets/Projects/bolofence.png";
import cloudchain from "../../Assets/Projects/bolofence.png";
import converso from "../../Assets/Projects/converso.png";
import embodiment from "../../Assets/Projects/embodiment.JPG";
import unipoly from "../../Assets/Projects/unipoly.jpg";
import conversoPdf from "../../Assets/../Assets/Projects/converso.pdf";
import bolofencePdf from "../../Assets/../Assets/Projects/bolofence.pdf";
import cloudchainPdf from "../../Assets/../Assets/Projects/cloudchain.pdf";
import embodimentvrPdf from "../../Assets/../Assets/Projects/embodimentvr.pdf";
import tmdPdf from "../../Assets/../Assets/Projects/tmd.pdf";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="orange">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={converso}
              tags={['home assistant', 'python', 'scikit-learn', 'nltk']}
              isBlog={false}
              title="Converso"
              description="A privacy-preserving AI-based Intent Recognition engine with Probabilistic Spell-Editing for an Italian Smart Home Voice Assistant."
              ghLink="https://github.com/paolapersico1/converso"
              demoLink={conversoPdf}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bolofence}
              tags={['android', 'java', 'codeigniter', 'postgis']}
              isBlog={false}
              title="BoloFence"
              description="An Activity-aware geofencing platform which tracks a user location through an Android app, sends related notifications and analyses spatial data."
              ghLink="https://github.com/paolapersico1/BoloFence"
              demoLink={bolofencePdf}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloudchain}
              tags={['expressjs', 'solidity', 'truffle','web3']}
              isBlog={false}
              title="CloudChain"
              description="A blockchain-based cloud storage platform which can provide an automatic settlement tool for SLA-related disputes."
              ghLink="https://github.com/paolapersico1/cloud-chain"
              demoLink={cloudchainPdf}             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tmd}
              tags={['python', 'pandas', 'scikit-learn', 'pytorch']}
              isBlog={false}
              title="Transport-Mode-Detection"
              description="A Data Analysis project which compares the performance of several ML models in the task of detecting a user's transport mode via their mobile sensors data."
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
              description="A project developed in collaboration with artist Federica Sasso which explores embodiment and body swap experiences through VR headsets to enhance empathy."
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
              description="A turn based videogame inspired by Monopoly whose winner is the first player who achieves a Computer Science degree."
              ghLink="https://github.com/paolapersico1/Unipoly"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
