import styled from "styled-components";
import heroBgMobile from "@/assets/hero_mobile.jpg";
import heroBgTablet from "@/assets/hero_tablet.jpg";
import heroBgDesktop from "@/assets/hero_desktop.jpg";
import heroBg2x from "@/assets/hero_desktop@2x.jpg";

export const HeroWrapper = styled.section`
  overflow: hidden;
  width: 80%;
  height: 80%;
  max-width: 38.5rem;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  gap: 9.6rem;
  /* background-color: ${(p) => p.theme.colors.mainBgColorLowOp}; */
  padding: 2.4rem;
  border-radius: 1.2rem;

  @media (min-width: 768px) {
    max-width: 76.8rem;
  }

  @media (min-width: 1024px) {
    max-width: 102.4rem;
  }

  @media (min-width: 1400px) {
    max-width: 140rem;
  }
`;

export const HeroTitle = styled.h1`
  width: 35%;
  font-size: 4.2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.mainTextColor};
  text-shadow: 0 0 10px ${({ theme }) => theme.colors.mainTextColor};
  transition: color 0.3s ease-in-out;
`;

export const HeroImg = styled.div`
  /* overflow: hidden; */
  width: 65%;
  /* width: 44rem; */
  height: auto;
  height: 44rem;
  padding: 1.2rem;
  border-radius: 4% 4% 23% 37% / 4% 4% 42% 27%;
  background-color: ${(p) => p.theme.colors.mainBgColorLowOp};
  /* background-color: red; */
`;
