import React from "react";
import {
  StyledAboutSection,
  AboutContent,
  AboutSummary,
} from "./AboutElements";

const AboutSection = () => {
  // const skills = [
  //   "JavaScript (ES6+)",
  //   "React",
  //   "Node.js",
  //   "MongoDB",
  //   "Java",
  //   "Flutter",
  // ];

  return (
    <StyledAboutSection>
      <AboutContent>
        <AboutSummary>
          <h2 className="nav-heading">About Me</h2>
          <p>
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>
        </AboutSummary>
        <h2 className="nav-heading">About Me</h2>
      </AboutContent>
    </StyledAboutSection>
  );
};

export default AboutSection;
