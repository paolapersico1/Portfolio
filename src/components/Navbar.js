import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineTool,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import myLogo from "../assets/logo.svg";
import LanguageSwitcher from "../components/LanguageSwitcher.js";
import { Link } from 'react-scroll';
import { FormattedMessage } from 'react-intl';

function NavBar({ currentLocale, onChangeLocale, displayScrollLinks }) {
  const [expand, updateExpanded] = useState(false);
  const [navColour] = useState(true);

  if(!displayScrollLinks)
    return (
      <Navbar
        variant="dark"
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
      >
        <Container>
           <Navbar.Brand href="/">
            <img
              src={myLogo}
              alt="logo"
              style={{ maxHeight: "25px", paddingRight: "10px" }}
            />
            Paola Persico
          </Navbar.Brand>

          <Nav className="ms-auto" style={{ marginBottom: "15px" }}>
            <Nav.Item className="button">
              <LanguageSwitcher currentLocale={currentLocale} onChange={onChangeLocale}/>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    );
  else
    return (
      <Navbar
        variant="dark"
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
      >
        <Container>
           <Navbar.Brand href="/">
            <img
              src={myLogo}
              alt="logo"
              style={{ maxHeight: "25px", paddingRight: "10px" }}
            />
            Paola Persico
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          >
          </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link 
                  as={Link}
                  to="home-section" 
                  spy={true} 
                  smooth={true} 
                  duration={500}
                >
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="about" 
                  spy={true} 
                  smooth={true} 
                  duration={500}
                >
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> <FormattedMessage id="about" defaultMessage="About" />
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="skills-section" 
                  spy={true} 
                  smooth={true} 
                  duration={500}
                >
                  <AiOutlineTool style={{ marginBottom: "2px" }} /> <FormattedMessage id="skills" defaultMessage="Skills" />
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="project-section" 
                  spy={true} 
                  smooth={true} 
                  duration={500}
                >
                  <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }}/>{" "}<FormattedMessage id="projects" defaultMessage="Projects" />
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="resume-section" 
                  spy={true} 
                  smooth={true} 
                  duration={500}
                >
                  <CgFileDocument style={{ marginBottom: "2px" }} /> CV
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="button">
                <Button
                  href="https://www.linkedin.com/in/paolapersico1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-inner"
                >
                  <FormattedMessage id="contacts" defaultMessage="Contacts" />
                </Button>
              </Nav.Item>

              <Nav.Item className="button">
                <LanguageSwitcher currentLocale={currentLocale} onChange={onChangeLocale} />
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavBar;
