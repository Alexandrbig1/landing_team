import styled, { keyframes } from "styled-components";
import { primaryFont } from "../fonts";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRegLightbulb } from "react-icons/fa6";
import { PiSparkleLight } from "react-icons/pi";

const glowing = keyframes`
  0% { background-position: 0 0; }
  50% { background-position: 400% 0; }
  100% { background-position: 0 0; }
`;

export const HeroContainer = styled.div`
  width: 100%;
  max-width: 375px;
  position: relative;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const HeroWrapper = styled.section`
  /* overflow: hidden; */
  width: 85%;
  height: 80%;
  /* max-width: 38.5rem; */
  /* max-height: 100vh; */
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 7.2rem;
  /* background-color: ${(p) => p.theme.colors.mainBgColorLowOp}; */
  padding: 2.4rem;
  border-radius: 1.2rem;

  @media (min-width: 768px) {
    /* max-width: 76.8rem; */
  }

  @media (min-width: 1024px) {
    /* max-width: 102.4rem; */
  }

  @media (min-width: 1400px) {
    /* max-width: 140rem; */
    display: grid;
    grid-template-columns: 1.25fr 1.75fr;
    justify-items: center;
  }
`;

export const GlitchText = styled(motion.h1)`
  font-size: 8.2rem;
  color: transparent;
  -webkit-text-stroke: 1px #fff;
  -webkit-text-stroke-color: #e7e5e490;
  line-height: 0.78;
  text-transform: uppercase;
  position: relative;
  transition: all var(--primary-transition);
  position: relative;
`;

export const HeroTitleIcon = styled(motion.span)`
  color: #f5f5f540;
  position: absolute;
  top: 0;
  right: 0;
  transform: rotate(180deg);
`;

export const HeroTitleBulb = styled(FaRegLightbulb)`
  font-size: 6.4rem;
`;

export const HeroTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
  /* background-color: ${(p) => p.theme.colors.mainBgColor}; */
  /* background-color: #132a1350; */
  padding: 2.4rem;
  border-radius: 1.2rem;
  position: relative;
`;

export const HeroText = styled.p`
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.3444;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.whiteColor};
`;

export const HeroImgWrapper = styled.div`
  /* overflow: hidden; */
  width: 100%;
  /* width: 44rem; */
  height: auto;
  padding: 1.2rem;
  border-radius: 4% 4% 23% 37% / 4% 4% 42% 27%;
  border-radius: 23% 1% 23% 1% / 42% 1% 42% 1%;
  background-color: ${(p) => p.theme.colors.mainBgColorLowOp};
  /* background-color: red; */
  transform: scale(1.2);
`;

export const HeroImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 1% 24% 23% 37% / 1% 24% 42% 27%;
`;

export const HeroBtn = styled(Link)`
  position: relative;
  border: none;
  background: none;
  outline: none;
  padding: 1.2rem;
  border-radius: 1.2rem;
  width: 100%;
  cursor: pointer;
  background-color: ${(p) => p.theme.colors.mainBgColor};
  color: ${(p) => p.theme.colors.whiteColor};
  text-transform: uppercase;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  font-family: ${primaryFont};
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.2;
  letter-spacing: -0.02em;

  &::before {
    content: "";
    background: linear-gradient(
      45deg,
      ${(p) => p.theme.colors.whiteColorLowOp},
      transparent,
      ${(p) => p.theme.colors.whiteColorLowOp},
      transparent,
      ${(p) => p.theme.colors.whiteColorLowOp},
      transparent,
      ${(p) => p.theme.colors.whiteColorLowOp}
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 600%;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    filter: blur(4px);
    animation: ${glowing} 40s linear infinite;
    transition: all 0.3s ease-in-out;
    border-radius: inherit;
    opacity: 1;
  }

  &:hover:before {
    animation-play-state: paused;
  }
`;

export const HeroBtnIcon = styled(PiSparkleLight)`
  font-size: 2.4rem;
  color: ${(p) => p.theme.colors.whiteColor};
`;
