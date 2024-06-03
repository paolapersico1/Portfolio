import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineHome,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FormattedMessage } from 'react-intl';

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
      <Col md="4" className="footer-body"> 
        </Col>
        <Col md="4" className="footer-body">
          <h3><FormattedMessage id="findmeon" defaultMessage="Find me on:" /></h3>
            <div className="hero-socials">
              <li className="social-icons">
                  <a
                    href="https://github.com/paolapersico1"
                    style={{ color: "white" }}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/paola-persico-963197131/"
                    style={{ color: "white" }}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://community.home-assistant.io/u/emilypeek/summary/"
                    style={{ color: "white" }}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <AiOutlineHome />
                  </a>
                </li>
            </div>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3><FormattedMessage id="forkedfrom" defaultMessage="Forked from " /><a href="https://github.com/paolapersico1/Portfolio">SB</a></h3>
          <h3><FormattedMessage id="illustrationsby" defaultMessage="Illustrations by " /><a href="https://www.freepik.com/">Freepik</a></h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
