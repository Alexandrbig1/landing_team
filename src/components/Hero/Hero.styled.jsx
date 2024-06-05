import styled from "styled-components";
import heroBgMobile from "@/assets/hero_bg_mobile.jpg";
import heroBgTablet from "@/assets/hero_bg_tablet.jpg";
import heroBgDesktop from "@/assets/hero_bg_laptop.jpg";
import heroBg2x from "@/assets/hero_bg@2x.jpg";

export const HeroWrapper = styled.section`
  background-image: url(${heroBgMobile});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.mainTextColor};
  transition: background-image 0.3s ease-in-out;
  position: relative;

  @media (min-width: 768px) {
    background-image: url(${heroBgTablet});
  }

  @media (min-width: 1024px) {
    background-image: url(${heroBgDesktop});
  }

  @media (min-width: 1024px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1024px) and (min-resolution: 192dpi) {
    background-image: url(${heroBg2x});
  }
`;

export const HeroTitle = styled.h1`
  font-size: 4.2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.mainTextColor};
  text-shadow: 0 0 10px ${({ theme }) => theme.colors.mainTextColor};
  transition: color 0.3s ease-in-out;
`;
