import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import enrollment from "../../Assets/Projects/enrollment.png";
import lucky from "../../Assets/Projects/lucky.png";
import twice from "../../Assets/Projects/twice.jpg";

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
              imgPath={lucky}
              isBlog={false}
              title="Lucky"
              description="Coquette Lucky Game is a charming and flirty spin-the-wheel experience where your luck decides your fate! Spin to win surprises, hearts, and a little bit of playful mischief."
              ghLink="https://github.com/ashley0601/Lucky-Game"
              demoLink="https://github.com/ashley0601/Lucky-Game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twice}
              isBlog={false}
              title="Twice Page"
              description="Welcome to our TWICE fan page — a sweet space for ONCEs all around the world! Here, we celebrate the charm, talent, and friendship of the nine amazing members of TWICE. From catchy songs to iconic stages, let's relive every moment and fall in love over and over again."
              ghLink="https://github.com/ashley0601/ITPS_205_Enallo.git"
              demoLink="https://ashley0601.github.io//ITPS_205_Enallo/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={enrollment}
              isBlog={false}
              title="Student Portal"
              description="Welcome to the Enrollment Portal — your official gateway to registering for courses, submitting requirements, and managing your student profile. Fast, secure, and easy enrollment starts here."
              ghLink=" https://github.com/kurtprime/AshleyEnallo"
              demoLink="https://kurtprime.github.io/AshleyEnallo/enrollment_form.html"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
