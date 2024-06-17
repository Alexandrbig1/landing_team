import { motion } from "framer-motion";
import {
  DiscordIcon,
  Link,
  SocialLinksWrapper,
  WoolfImg,
} from "./SocialIcons.styled";

// eslint-disable-next-line react/prop-types
function SocialIcons({ color }) {
  return (
    <SocialLinksWrapper>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", delay: 1 }}
      >
        <Link
          href="https://discord.gg/TRufb4Qy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Join Alex Smagin's Discord server"
        >
          <DiscordIcon $color={color} />
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", delay: 0.5 }}
      >
        <Link
          href="https://woolf.university/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Woolf University website"
        >
          <WoolfImg src="woolf.png" alt="woolf university logo" />
        </Link>
      </motion.div>
    </SocialLinksWrapper>
  );
}

export default SocialIcons;
