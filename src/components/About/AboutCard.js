import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Oscar Opemba </span>
            from <span className="purple"> Nairobi, Kenya.</span>
            <br />
            I am currently a student and working as SOC Analyst.
            <br />
            I have completed SOC Certification at THM
            <br />
            <br />
            Apart from Hacking, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight />  Programming
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Oscar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
