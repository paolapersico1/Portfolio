import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { FormattedMessage } from 'react-intl';
import { useIntl } from 'react-intl'; 
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const {locale} = useIntl();
  const [width, setWidth] = useState(1200);
  const pdfs = {
    en: "/englishcv.pdf",
    it: "/italiancv.pdf"
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdfs[locale]}
            target="_blank"
            className="btn-inner" 
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;<FormattedMessage id="downloadcv" defaultMessage="Download CV" />
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdfs[locale]} className="d-flex justify-content-center">
            <Page pageNumber={1} renderTextLayer={false} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdfs[locale]}
            target="_blank"
            className="btn-inner"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;<FormattedMessage id="downloadcv" defaultMessage="Download CV" />
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
