import { LogoImg, LogoText, LogoWrapper } from "./Logo.styled";
import { motion } from "framer-motion";

function Logo() {
  return (
    <motion.a
      href="/landing_team/"
      title="Go to Seventh Sense landing page"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", delay: 0.25 }}
      style={{ display: "flex", alignItems: "center", gap: "12px" }}
    >
      <LogoWrapper>
        <LogoImg
          src="logo.png"
          alt="Seventh Sense logo"
          title="Seventh Sense Logo"
          width="36px"
          height="36px"
          loading="lazy"
        />
      </LogoWrapper>
      <LogoText>Seventh Sense</LogoText>
    </motion.a>
  );
}

export default Logo;
