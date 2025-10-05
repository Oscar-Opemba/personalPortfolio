import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  return (
    <Container fluid className="resume-section">
      <Particle />

      {/* Download PDF Button */}
      <Row style={{ justifyContent: "center", position: "relative", marginBottom: "20px" }}>
        <a
          href="/resume/Oscar_Opemba_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "#0d0d0d",
            color: "#00ff00",
            border: "2px solid #00ff00",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "bold",
            marginBottom: "20px"
          }}
        >
          <AiOutlineDownload style={{ marginRight: "8px" }} />
          Download CV
        </a>
      </Row>

      {/* Hacker-Style Interactive Resume */}
      <Row>
        <div
          style={{
            backgroundColor: "#0d0d0d",
            color: "#00ff00",
            fontFamily: "Courier, monospace",
            padding: "30px",
            borderRadius: "8px",
            lineHeight: "1.6",
            maxWidth: "900px",
            margin: "20px auto",
            boxShadow: "0 0 15px #00ff00"
          }}
        >
          <div>&gt; <strong>Oscar Opemba</strong></div>
          <div>Cybersecurity Enthusiast | Bug Bounty Hunter | Penetration Tester</div>
          <div>Email: ozzie.999@hotmail.com | Phone: +254 712543920</div>
          <div>
            Website: <a href="https://oscaropemba.tech" style={{ color: "#00ffff" }}>oscaropemba.tech</a> | Location: Nairobi, Kenya
          </div>

          <br />
          <div>-- About Me --</div>
          <div>
            Cybersecurity student with hands-on experience in bug bounty hunting and penetration testing. Skilled in Kali Linux, API security testing, and vulnerability analysis. Passionate about securing banking and fintech platforms.
          </div>

          <br />
          <div>-- Skills --</div>
          <div>Programming / Scripting: Python, Bash, JavaScript</div>
          <div>Tools / Platforms: Kali Linux, Burp Suite, Metasploit</div>
          <div>Other: Bug Bounty, OSINT, Web Security, API Testing</div>

          <br />
          <div>-- Education --</div>
          <div>B.Sc. Information Technology – Karatina University</div>

          <br />
          <div>-- Experience / Projects --</div>
          <div>Bug Bounty Hunter | Personal Projects – Discovered vulnerabilities on multiple websites, wrote detailed reports, and collaborated on patching issues.</div>
          <div>API Security Testing | trewatech.spot – Identified and patched API vulnerabilities in a fintech platform.</div>
          <div>Trading Bots / Automation – Built automated trading bots for Binary.com / Deriv using EX5/XML.</div>

          <br />
          <div>-- Alias --</div>
          <div>CyberNomad</div>
        </div>
      </Row>
    </Container>
  );
}

export default ResumeNew;

