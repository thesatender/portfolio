import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tindog from "../../Assets/Projects/tindog.png";
import nlpMcqGeneration from "../../Assets/Projects/nlpMcqGeneration.png";
import keeper from "../../Assets/Projects/keeper.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nlpMcqGeneration}
              isBlog={false}
              title="MCQ Generation using NLP"
              description="MCQ Generation using NLP is a project that utilizes Natural Language Processing techniques to generate multiple-choice questions. It integrates concepts like summarization, keyword extraction, distractor generation, and word sense disambiguation. This project aims to assist educators by providing a tool to quickly generate relevant and meaningful questions from text."
              ghLink="https://github.com/thesatender/mcq-generation-nlp"
              // demoLink="https://satender.com/"    <-- Update later
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keeper}
              isBlog={false}
              title="Keeper"
              description="Discover a simple and intuitive note-taking solution built with React. Our Google Keep clone allows you to effortlessly jot down and organize your ideas, tasks, and reminders. Enjoy a clean and user-friendly interface and an easy way to stay productive and organized. Start taking better notes today!"
              ghLink="https://github.com/satender/Bits-0f-C0de"
              demoLink="https://keeper-thesatender.vercel.app/"   
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tindog}
              isBlog={false}
              title="TinDog"
              description="The TinDog App is a fun and fictional website inspired by the popular dating app, Tinder. Built using HTML and Bootstrap CSS, this unique website is designed exclusively for dogs. Dog owners can enjoy a playful interface, 'swiping' through profiles to find potential furry companions and make connections in the doggy world. Get ready for some Woof-tastic fun!"
              ghLink="https://github.com/thesatender/TinDog"
              demoLink="https://tindog-thesatender.vercel.app/"  
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
