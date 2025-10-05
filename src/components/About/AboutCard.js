import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Devesh Rathi </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            I recently completed my professional journey with Cognizant, where I strengthened my industry experience, and previously interned at Weshine Tech, contributing to real-world development projects.
            <br />
            I have completed B.Tech From Vishwakrma Institute Of Technology(Kondhwa , Pune).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Devesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
