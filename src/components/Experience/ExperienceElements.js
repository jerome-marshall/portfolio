import styled, { css } from "styled-components";

export const StyledExperienceSection = styled.section`
  max-width: 100%;
  height: 100vh;
  background: var(--background-dark);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const ExperienceContent = styled.div`
  z-index: 3;
  width: 700px;
  /* height: 700px; */
  position: absolute;
  display: flex;
  flex-direction: column;
  /* border: 3px solid white; */
  justify-content: center;
  align-items: flex-start;
  color: var(--color-white);

  & > h2 {
    color: var(--color-white);
    margin: var(--margin-md) 0;
    font-size: var(--fz-heading-sm);
  }
`;

export const Container = styled.div`
  /* background-color: white; */
  display: flex;
  height: 250px;
  flex-direction: row;
  margin: 20px 0px;
`;

export const TabsContainer = styled.div`
  display: flex;
  /* padding: 2px; */
`;

export const TabPanelContainer = styled.div`
  margin-left: 30px;

  /* & p {
    margin-left: -20px;
  } */

  & h3 {
    color: skyblue;
    .title {
      color: var(--color-white);
      font-size: var(--fz-xl);
      margin-bottom: 8px;
    }

    a.url {
      display: inline-block;
      text-decoration: none;
      text-decoration-skip-ink: auto;
      position: relative;
      transition: var(--transition);
      color: skyblue;
      &:hover {
        cursor: pointer;
        color: #0088ff;
      }
    }
  }

  & p.expTime {
    margin-bottom: 25px;
    margin-top: 5px;
    font-size: var(--fz-sm);
    color: var(--color-grey-300);
  }

  & ul {
    list-style: none;
    list-style-position: inside;
  }

  & li {
    color: var(--color-grey-300);
    font-size: var(--fz-md);
    margin-bottom: 8px;
    position: relative;
    line-height: 25px;
    /* text-indent: -20px; */
    padding-left: 20px;

    &:before {
      content: "▹";
      position: absolute;
      left: 0;
      /* top: 5px; */
      color: var(--color-white);
      font-size: var(--fz-sm);
      /* line-height: 15px; */
    }
  }
`;

export const TabHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  width: 100%;
`;

export const StylizedTab = styled.button`
  color: var(--color-grey-700);
  /* width: 8.5rem; */
  white-space: nowrap;
  padding: 12px 15px;
  font-size: var(--fz-sm);
  text-align: start;
  background-color: transparent;
  border: none;
  border-left: 3px solid var(--color-grey-900);
  /* border-radius: var(--border-radius); */
  cursor: ${(p) => (p.disabled ? "default" : "pointer")};
  transition: all 0.3s ease-in-out;

  /* ${(p) =>
    p.active
      ? css`
          color: var(--color-white);
          border-left: 3px solid white;
        `
      : css`
          color: var(--color-grey-900);
        `} */

  //color
  ${(p) =>
    p.active &&
    css`
      color: var(--color-white);
      border-left: 3px solid white;
    `}

  :hover {
    /* transition: all 1s ease-in-out; */
    background-color: #333;
    color: var(--color-white);
  }
`;

export const StyledTabPanel = styled.div`
  display: ${(p) => (p.active ? "flex" : "none")};
  /* font-size: 4rem; */
  background: var(--background-dark);
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
`;

export const TabPanelContent = styled.div``;

export const TabsHolder = styled.div`
  display: flex;
  flex-direction: column;
`;
