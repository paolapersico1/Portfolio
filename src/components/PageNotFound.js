import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import notFoundImg from "../assets/404.svg";
import { FormattedMessage } from 'react-intl';

function PageNotFound() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading">
                404
              </h1>

              <h1 className="heading-name">
                <FormattedMessage id="pagenotfound" defaultMessage="Page not found." />
              </h1>
            </Col>

            <Col md={5} className="home-pic-div">
              <img
                src={notFoundImg}
                alt="404"
                className="img-fluid home-pic"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default PageNotFound;
