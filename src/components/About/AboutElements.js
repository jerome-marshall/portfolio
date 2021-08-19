import styled from "styled-components";

export const StyledAboutSection = styled.section`
  max-width: 100%;
  height: 100vh;
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const AboutContent = styled.div`
  z-index: 3;
  max-width: var(--max-width);
  position: absolute;
  display: grid;
  /* border: 3px solid white; */
  grid-template-columns: 3fr 2fr;
  justify-content: center;
  align-items: center;
  color: var(--color-white);
`;

export const AboutSummary = styled.div`
  display: flex;
  flex-direction: column;
  flex: auto;

  & > h2 {
    color: var(--color-white);
    margin: var(--margin-md);
    font-size: var(--fz-heading-sm);
  }

  & div.summary {
    padding: 12px 0;
    margin: 0 var(--margin-md);
  }

  & p {
    color: var(--color-grey-300);
    font-size: var(--fz-md);
    line-height: var(--line-height-sm);
  }

  & ul.skills-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      color: var(--color-white);
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      /* font-family: var(--font-mono); */
      font-size: var(--fz-sm);

      &:before {
        content: "▹";
        position: absolute;
        left: 0;
        top: 5px;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

export const StyledPic = styled.div`
  position: relative;

  max-width: 340px;

  .wrapper {
    background: violet;
    display: flex;
    position: relative;
    justify-content: center;
    width: 100%;
    border: none;
    border-radius: var(--border-radius);
    background-color: black;
    box-shadow: 16px white;

    .img {
      max-width: 340px;
      filter: none;
      mix-blend-mode: normal;
      vertical-align: middle;
      border-radius: var(--border-radius);
      opacity: 0.4;
      box-shadow: 0 10px 30px -15px #fff;
      transition: all 500ms ease-in-out;

      :hover {
        max-width: 350px;
        opacity: 1;
      }
    }
  }

  /* :hover {
    bottom: 10px;
    right: 10px;
  } */
`;
