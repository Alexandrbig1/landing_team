import SocialIcons from "../SocialIcons/SocialIcons";
import Year from "../Year/Year";
import { motion } from "framer-motion";
import {
  FooterRightsWrapper,
  FooterText,
  FooterWrapper,
  MarkWrapper,
  TradeMark,
  YearWrapper,
} from "./Footer.styled";
import { Container } from "../layout";

function Footer() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <FooterWrapper>
          <FooterRightsWrapper>
            <MarkWrapper>
              <FooterText>All Rights Reserved</FooterText>
              <TradeMark />
            </MarkWrapper>
            <YearWrapper>
              <Year />
              <FooterText>Seventh Sense</FooterText>
            </YearWrapper>
          </FooterRightsWrapper>
          <SocialIcons />
        </FooterWrapper>
      </motion.div>
    </Container>
  );
}

export default Footer;
