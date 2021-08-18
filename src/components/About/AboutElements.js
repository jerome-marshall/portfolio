import styled from "styled-components";

export const StyledAboutSection = styled.section`
  max-width: 100%;
  height: 100vh;
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: block;
  }

  & h2 {
    color: #fff;
  }
`;

export const AboutContent = styled.div`
  z-index: 3;
  max-width: 100vw;
  position: absolute;
  display: grid;
  border: 3px solid white;
  grid-template-columns: 3fr 2fr;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const AboutSummary = styled.div`
  display: flex;
  flex-direction: column;
`;
