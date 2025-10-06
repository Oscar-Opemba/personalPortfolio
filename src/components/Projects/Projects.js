import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Import project thumbnails
import threathunter from "../../Assets/Projects/threathunter.svg";
import vulnX from "../../Assets/Projects/vulnx.svg";
import darknet from "../../Assets/Projects/darknet.svg";
import securebank from "../../Assets/Projects/securebank.svg";
import socautomator from "../../Assets/Projects/soc-automator.svg";
import packettrace from "../../Assets/Projects/packettrace.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Cybersecurity Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          A selection of projects highlighting my SOC analysis, threat detection,
          and ethical hacking expertise.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={threathunter}
              title="ThreatHunter Dashboard"
              description="A SOC visualization tool aggregating logs, alerts, and threat-intel feeds for real-time analysis."
              ghLink="https://github.com/Oscar-Opemba/ThreatHunter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vulnX}
              title="VulnX – Automated Vulnerability Scanner"
              description="A Python-based web vulnerability scanner detecting XSS, CSRF, and SSRF vulnerabilities."
              ghLink="https://github.com/Oscar-Opemba/VulnX"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={darknet}
              title="DarkNet OSINT Toolkit"
              description="An OSINT reconnaissance suite integrating Shodan, Censys, and other APIs for threat intelligence gathering."
              ghLink="https://github.com/Oscar-Opemba/DarkNet-OSINT"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={securebank}
              title="SecureBank API Pentest Report"
              description="A realistic bug-bounty-style pentest of insecure banking APIs, authentication flows, and logic vulnerabilities."
              ghLink="https://github.com/Oscar-Opemba/SecureBank-API"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socautomator}
              title="SOC-Automator"
              description="An incident-response automation framework that triages alerts, enriches indicators, and triggers SOAR playbooks."
              ghLink="https://github.com/Oscar-Opemba/SOC-Automator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={packettrace}
              title="PacketTrace Analyzer"
              description="A network packet analysis tool for detecting anomalies and decoding traffic patterns — built for SOC use cases."
              ghLink="https://github.com/Oscar-Opemba/PacketTrace-Analyzer"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
