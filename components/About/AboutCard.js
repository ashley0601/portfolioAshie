import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Maria Ashley Enallo </span>
            from <span className="purple"> Philippines</span>
            <br />
            I am currently a student at Lucena City College.
            <br />
            I have completed Senior High at Lucena City National Highschool.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Kdrama
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          “Do the best you can until you know better. Then when you know better, do better.” {" "}
          </p>
          <footer className="blockquote-footer">Maya Angelou</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
