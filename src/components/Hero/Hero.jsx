import { HeroImg, HeroTitle, HeroWrapper } from "./Hero.styled";

function Hero() {
  return (
    <div>
      <HeroWrapper>
        <HeroTitle>Hero</HeroTitle>
        <HeroImg>
          <picture></picture>
        </HeroImg>
      </HeroWrapper>
    </div>
  );
}

export default Hero;
