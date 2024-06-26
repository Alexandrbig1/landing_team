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

export const HeroWrapper = styled.section`
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 6.2rem;
  margin-bottom: 12.2rem;
  gap: 4.2rem;
  padding: 2.4rem 1.2rem;
  border-radius: 1.2rem;

  @media (min-width: 344px) {
    padding: 2.4rem;
  }

  @media (min-width: 385px) {
    width: 100%;
  }

  @media (min-width: 1440px) {
    margin-top: 0;
    margin-bottom: 0;
    display: grid;
    grid-template-columns: 1.25fr 1.75fr;
    justify-items: center;
    gap: 7.2rem;
    width: 85%;
  }
`;

export const GlitchText = styled(motion.h1)`
  font-size: 7.2rem;
  color: transparent;
  -webkit-text-stroke: 1px #fff;
  -webkit-text-stroke-color: #e7e5e490;
  line-height: 0.78;
  text-transform: uppercase;
  position: relative;
  transition: all var(--primary-transition);
  position: relative;

  @media (min-width: 768px) {
    font-size: 8.2rem;
  }
`;

export const HeroTitleIcon = styled(motion.span)`
  color: #f5f5f540;
  position: absolute;
  bottom: -0.6rem;
  right: 0;
  transform: rotate(180deg);

  @media (min-width: 768px) {
    top: 0;
    bottom: unset;
  }
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
  padding: 2.4rem 1.2rem;
  border-radius: 1.2rem;
  position: relative;

  @media (min-width: 344px) {
    padding: 2.4rem;
  }

  @media (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }

  @media (min-width: 1440px) {
    width: 100%;
  }
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
  width: 100%;
  max-width: 385px;
  height: auto;
  padding: 1.2rem;
  border-radius: 4% 4% 23% 37% / 4% 4% 42% 27%;
  border-radius: 23% 1% 23% 1% / 42% 1% 42% 1%;
  background-color: ${(p) => p.theme.colors.mainBgColorLowOp};
  transform: scale(1.2);
  margin: 0 auto;

  @media (min-width: 334px) {
    max-width: unset;
  }

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1440px) {
    width: 100%;
  }
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
