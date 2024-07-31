import React from "react";
import { HeroImg, HeroImgWrapper } from "./Hero.styled";

const HeroImgComponent = React.memo(() => {
  return (
    <HeroImgWrapper>
      <picture>
        <source
          srcSet="images/hero_desktop@2x.webp 2x"
          media="(min-width: 1024px)"
          type="image/webp"
        />
        <source
          srcSet="images/hero_desktop.webp"
          media="(min-width: 1024px)"
          type="image/webp"
        />
        <source
          srcSet="images/hero_tablet.webp"
          media="(min-width: 768px)"
          type="image/webp"
        />
        <source
          srcSet="images/hero_mobile.webp"
          media="(max-width: 767px)"
          type="image/webp"
        />
        <source
          srcSet="images/hero_desktop@2x.jpg 2x"
          media="(min-width: 1024px)"
          type="image/jpeg"
        />
        <source
          srcSet="images/hero_desktop.jpg"
          media="(min-width: 1024px)"
          type="image/jpeg"
        />
        <source
          srcSet="images/hero_tablet.jpg"
          media="(min-width: 768px)"
          type="image/jpeg"
        />
        <source
          srcSet="images/hero_mobile.jpg"
          media="(max-width: 767px)"
          type="image/jpeg"
        />
        <HeroImg
          src="images/hero_mobile.jpg"
          alt="Seventh Sense office space"
          loading="lazy"
        />
      </picture>
    </HeroImgWrapper>
  );
});

HeroImgComponent.displayName = "HeroImgComponent";

export default HeroImgComponent;
