import React from "react";
import { StyledAboutSection, StyledText } from "./AboutElements";

const AboutSection = () => {
  const skills = [
    "JavaScript (ES6+)",
    "React",
    "Node.js",
    "MongoDB",
    "Java",
    "Flutter",
  ];

  return (
    <StyledAboutSection>
      <h2 className="nav-heading">About Me</h2>
    </StyledAboutSection>
  );
};

export default AboutSection;
