import React from "react";
import Typewriter from "typewriter-effect";

import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          
          "A Cybersecurity Researcher 🧠",
          "A SOC Analyst 🕵️‍♂️",
          "A Bug Bounty Hunter 💰",
          "A Network Security Specialist 🌐",
          "An Ethical Hacker ⚡",
          "A Penetration Tester 💻",
          "A Threat Intelligence Explorer 🔍",
          "A Blue Team Defender 🛡️",
          "A Red Team Operator 🚀",
          "A Digital Forensics Enthusiast 🔬"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
