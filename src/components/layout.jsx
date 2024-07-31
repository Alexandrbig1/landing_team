import styled from "styled-components";
import heroBgMobile from "@/assets/hero_bg_mobile.jpg";
import heroBgTablet from "@/assets/hero_bg_tablet.jpg";
import heroBgDesktop from "@/assets/hero_bg_laptop.jpg";
import heroBg2x from "@/assets/hero_bg@2x.jpg";
import heroBgMobileWebp from "@/assets/hero_bg_mobile.webp";
import heroBgTabletWebp from "@/assets/hero_bg_tablet.webp";
import heroBgDesktopWebp from "@/assets/hero_bg_laptop.webp";
import heroBg2xWebp from "@/assets/hero_bg@2x.webp";

export const Container = styled.div`
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

export const Main = styled.main`
  background-image: url(${heroBgMobile});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.mainTextColor};
  transition: background-image 0.3s ease-in-out;
  position: relative;

  @supports (background-image: url(${heroBgMobileWebp})) {
    background-image: url(${heroBgMobileWebp});
  }

  @media (min-width: 768px) {
    background-image: url(${heroBgTablet});
    @supports (background-image: url(${heroBgTabletWebp})) {
      background-image: url(${heroBgTabletWebp});
    }
  }

  @media (min-width: 1024px) {
    background-image: url(${heroBgDesktop});
    @supports (background-image: url(${heroBgDesktopWebp})) {
      background-image: url(${heroBgDesktopWebp});
    }
  }

  @media (min-width: 1024px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1024px) and (min-resolution: 192dpi) {
    background-image: url(${heroBg2x});
    @supports (background-image: url(${heroBg2xWebp})) {
      background-image: url(${heroBg2xWebp});
    }
  }
`;
