import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi!, I am <span className="purple">Satender Sharma </span>
            from <span className="purple"> Delhi, India.</span>
            <br /> I am a final year student pursuing Bachelor of Technology(B.Tech) in 
            Computer Science Engineering at <span className="purple"> <a style={{textDecoration:"none", color:"inherit"}} href="http://nsut.ac.in/">Netaji Subhas University of Technology</a>.</span>
            {/* <br />
            Additionally, I am currently employed as a software developer at
            Juspay. */}
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching thrillers
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Satender</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
