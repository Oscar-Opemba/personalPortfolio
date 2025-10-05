import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

const lines = [
  "> Oscar Opemba",
  "Cybersecurity Enthusiast | Bug Bounty Hunter | Penetration Tester",
  "Email: ozzie.999@hotmail.com | Phone: +254 712543920",
  "Website: oscaropemba.tech | Location: Nairobi, Kenya",
  "",
  "-- About Me --",
  "Cybersecurity student with hands-on experience in bug bounty hunting and penetration testing.",
  "Skilled in Kali Linux, API security testing, and vulnerability analysis.",
  "Passionate about securing banking and fintech platforms.",
  "",
  "-- Skills --",
  "Programming / Scripting: Python, Bash, JavaScript",
  "Tools / Platforms: Kali Linux, Burp Suite, Metasploit",
  "Other: Bug Bounty, OSINT, Web Security, API Testing",
  "",
  "-- Education --",
  "B.Sc. Information Technology – Karatina University",
  "",
  "-- Experience / Projects --",
  "Bug Bounty Hunter | Personal Projects – Found vulnerabilities, wrote reports, patched issues.",
  "API Security Testing | trewatech.spot – Identified and patched API vulnerabilities in a fintech platform.",
  "Trading Bots / Automation – Built automated trading bots for Binary.com / Deriv using EX5/XML.",
  "",
  "-- Alias --",
  "CyberNomad",
];

function ResumeNew() {
  const [displayedLines, setDisplayedLines] = useState([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedLines((prev) => [...prev, lines[index]]);
      index++;
      if (index === lines.length) clearInterval(interval);
    }, 150); // typing speed (ms)
    return () => clearInterval(interval);
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />

      {/* Download PDF Button */}
      <Row style={{ justifyContent: "center", marginBottom: "20px" }}>
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
    marginBottom: "20px",
    boxShadow: "0 0 10px #00ff00",
  }}
>
  <AiOutlineDownload style={{ marginRight: "8px" }} />
  Download CV
</a>

      </Row>

      {/* Typing Hacker Resume */}
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
            boxShadow: "0 0 20px #00ff00",
            minHeight: "600px",
          }}
        >
          {displayedLines.map((line, idx) => (
            <div
              key={idx}
              style={{
                textShadow: "0 0 5px #00ff00, 0 0 10px #00ff00",
              }}
            >
              {line}
            </div>
          ))}
        </div>
      </Row>
    </Container>
  );
}

export default ResumeNew;

