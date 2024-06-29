import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Stack className="project-tags" direction="horizontal" gap={2}>
          {props.tags.map((tag, index) => {
            return (
              <Badge color="orange">{tag}</Badge>
            );
          })}
        </Stack>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank" rel="noopener noreferrer" className="btn-inner">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-inner"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Highlights"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
