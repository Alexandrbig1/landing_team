import {
  HeroBtn,
  HeroImg,
  HeroImgWrapper,
  HeroText,
  HeroTitle,
  HeroTitleWrapper,
  HeroWrapper,
} from "./Hero.styled";

function Hero() {
  return (
    <div>
      <HeroWrapper>
        <HeroTitleWrapper>
          <HeroTitle>Seventh Sense</HeroTitle>
          <HeroText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui,
            perferendis.
          </HeroText>
          <HeroBtn>our projects</HeroBtn>
        </HeroTitleWrapper>
        <HeroImgWrapper>
          <picture>
            <HeroImg src="/public/images/hero_desktop.jpg" alt="" />
          </picture>
        </HeroImgWrapper>
      </HeroWrapper>
    </div>
  );
}

export default Hero;
