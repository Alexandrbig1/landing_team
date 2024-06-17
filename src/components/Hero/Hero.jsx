import { motion } from "framer-motion";
import { Container } from "../layout";
import {
  GlitchText,
  HeroBtn,
  HeroBtnIcon,
  HeroImg,
  HeroImgWrapper,
  HeroText,
  HeroTitleBulb,
  HeroTitleIcon,
  HeroTitleWrapper,
  HeroWrapper,
} from "./Hero.styled";

const glitchAnimation = {
  initial: {},
  animate: {
    color: [
      "#f5f5f540",
      "#f5f5f540",
      "#f5f5f540",
      "#f5f5f540",
      "#f5f5f540",
      "#f5f5f540",
      "#f5f5f540",
      "rgba(255, 255, 255, 0)",
      "rgba(255, 255, 255, 0)",
      "rgba(255, 255, 255, 0)",
      "rgba(255, 255, 255, 0)",
      "rgba(255, 255, 255, 0)",
      "rgba(255, 255, 255, 0)",
      "rgba(255, 255, 255, 0)",
      "#f5f5f540",
      "#f5f5f540",
      "#f5f5f540",
      "#f5f5f540",
      "#f5f5f540",
      "rgba(255, 255, 255, 0)",
      "rgba(255, 255, 255, 0)",
      "#f5f5f540",
      "#f5f5f540",
      "rgba(255, 255, 255, 0)",
      "rgba(255, 255, 255, 0)",
      "#f5f5f540",
      "#f5f5f540",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "mirror",
      delay: 1,
    },
  },
};

function Hero() {
  return (
    <Container>
      <HeroWrapper>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring" }}
        >
          <HeroTitleWrapper>
            <GlitchText
              variants={glitchAnimation}
              initial="initial"
              animate="animate"
            >
              Seventh Sense
              <HeroTitleIcon
                variants={glitchAnimation}
                initial="initial"
                animate="animate"
              >
                <HeroTitleBulb />
              </HeroTitleIcon>
            </GlitchText>
            <HeroText>
              is a team of computer science students specializing in software
              engineering. United by our passion for technology, we collaborate
              to tackle challenging projects and innovate solutions. As aspiring
              software engineers, we are dedicated to continuous learning and
              excellence. Check out our landing page to meet our team, explore
              our projects, and feel free to contact us!
            </HeroText>
            <HeroBtn to="projects">
              <span>our projects</span>
              <HeroBtnIcon />
            </HeroBtn>
          </HeroTitleWrapper>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <HeroImgWrapper>
            <picture>
              <HeroImg src="/public/images/hero_desktop.jpg" alt="" />
            </picture>
          </HeroImgWrapper>
        </motion.div>
      </HeroWrapper>
    </Container>
  );
}

export default Hero;
