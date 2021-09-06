import styled from "styled-components";

export const StyledWorkSection = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  /* height: 100vh; */
  padding-top: 70px;
  background: var(--background-dark);
  justify-content: flex-start;
  align-items: center;
  position: relative;
  color: var(--color-white);

  @media (max-width: 768px) {
    display: block;
  }
`;

export const WorkContent = styled.div`
  z-index: 3;
  max-width: var(--max-width);
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  /* border: 3px solid white; */
  justify-content: center;
  align-items: center;

  & > h2 {
    color: var(--color-white);
    margin: var(--margin-md) 0;
    font-size: var(--fz-heading-md);
  }

  & ul.project-grid {
    width: 100%;
    display: grid;
    grid-gap: 15px;
    padding-top: 30px;
    justify-content: center;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(300px, auto);
  }
`;

export const ProjectLI = styled.li`
  /* border: 3px solid white; */
  background-color: var(--background-dark-highlight);
  position: relative;
  list-style: none;
  display: grid;
  grid-template-columns: 2fr 8fr;
  grid-template-rows: 2fr 8fr;
  width: 100%;
  padding: 30px 20px;
  transition: var(--transition);

  & .leftIcon {
    /* grid-area: "leftIcon"; */
    /* background-color: chocolate; */
    justify-self: start;
    align-self: center;
    /* padding: 10px; */

    & svg {
      width: 40px;
      height: 40px;
    }
  }

  & .rightIcons {
    /* grid-area: "rightIcon"; */
    /* background-color: chartreuse; */
    justify-self: end;
    align-self: center;
    /* padding-left: 10px; */

    & a {
      color: var(--color-white);
    }

    & svg {
      margin-right: 10px;
      width: 22px;
      height: 22px;
      transition: var(--transition);

      :hover {
        color: #0088ff;
      }
    }
  }

  & .content {
    /* background-color: coral; */

    /* grid-area: "content"; */
    grid-column: 1/3;

    & h3.title {
      margin: 20px 0 10px 0;
      font-size: var(--fz-xl);
      transition: var(--transition);
    }

    & p.description {
      color: var(--color-grey-300);
      margin-bottom: 30px;
    }
  }

  & ul {
    /* background-color: cadetblue; */
    grid-column: 1/3;
    justify-self: end;
    align-self: end;
    list-style: none;
  }

  & li {
    color: var(--color-grey-500);
    font-size: var(--fz-xs);
    padding: 10px;
    transition: var(--transition);

    display: inline;
    justify-self: end;
    align-self: end;
  }

  :hover {
    transform: translateY(-7px);
    & h3.title,
    li {
      color: #0088ff;
    }
  }
`;
