import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const HeroContainer = styled.div`
  background: var(--background-dark);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: var(--max-width);
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & p.myNameIs {
    margin-top: var(--margin-md);
    color: #fff;
    font-size: var(--fz-md);
    text-align: center;
    max-width: 600px;
  }

  & h1.name {
    color: var(--color-white);
    font-size: 70px;
    text-align: start;

    @media screen and (max-width: 768px) {
      font-size: 50px;
    }
    @media screen and (max-width: 480px) {
      font-size: 38px;
    }
  }

  & h2 {
    color: #aaa;
    font-size: 50px;
    text-align: start;

    @media screen and (max-width: 768px) {
      font-size: 44px;
    }
    @media screen and (max-width: 480px) {
      font-size: 28px;
    }
  }

  & p.summary {
    margin-top: var(--margin-md);
    color: #999;
    font-size: var(--fz-lg);
    text-align: left;
    max-width: 600px;
    line-height: var(--line-height-sm);

    @media screen and (max-width: 768px) {
      font-size: var(--fz-lg);
    }
    @media screen and (max-width: 480px) {
      font-size: var(--fz-md);
    }
  }
`;

export const Button = styled.button`
  margin-top: 3rem;
  color: #fff;
  background: transparent;
  font-size: 18px;
  text-align: left;
  border-radius: var(--border-radius);
  border: solid white;
  padding: 1.25rem 1.75rem;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
