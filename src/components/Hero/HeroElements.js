import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 100vw;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & p.myNameIs {
    margin-top: 24px;
    color: #fff;
    font-size: 20px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
    @media screen and (max-width: 480px) {
      font-size: 18px;
    }
  }

  & h1.name {
    color: #eee;
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
    margin-top: 24px;
    color: #999;
    font-size: 18px;
    text-align: left;
    max-width: 600px;

    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
    @media screen and (max-width: 480px) {
      font-size: 18px;
    }
  }
`;

export const Button = styled.button`
  margin-top: 3rem;
  color: #fff;
  background: transparent;
  font-size: 18px;
  text-align: left;
  border-radius: 30px;
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
