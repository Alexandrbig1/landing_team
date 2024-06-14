import { LogoImg, LogoWrapper } from "./Logo.styled";
import { motion } from "framer-motion";

function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", delay: 0.25 }}
    >
      <LogoWrapper>
        <LogoImg src="/public/logo.png" alt="logo" />
      </LogoWrapper>
    </motion.div>
  );
}

export default Logo;
