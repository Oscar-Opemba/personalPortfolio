import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "A Cybersecurity Researcher 🧠",
          "SOC Analyst 🕵️‍♂️",
          "Bug Bounty Hunter 💰",
          "Penetration Tester 💻",
          "Ethical Hacker ⚡",
          "Threat Intelligence Analyst 🔍",
          "Blue Team Defender 🛡️",
          "Red Team Operator 🚀",
          "Digital Forensics Enthusiast 🔬",
          "Network Security Specialist 🌐"
        ],  
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

