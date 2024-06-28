import SocialIcons from "../SocialIcons/SocialIcons";
import { motion } from "framer-motion";
import { Container } from "../layout";
import FooterRightsText from "../UI/FooterRightsText/FooterRightsText";
import { FooterWrapper } from "./Footer.styled";

function Footer() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <FooterWrapper>
          <FooterRightsText />
          <SocialIcons />
        </FooterWrapper>
      </motion.div>
    </Container>
  );
}

export default Footer;
