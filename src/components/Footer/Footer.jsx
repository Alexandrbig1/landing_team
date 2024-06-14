import SocialIcons from "../SocialIcons/SocialIcons";
import Year from "../Year/Year";
import { motion } from "framer-motion";
import {
  FooterRightsWrapper,
  FooterWrapper,
  MarkWrapper,
  TradeMark,
  YearWrapper,
} from "./Footer.styled";

function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <FooterWrapper>
        <FooterRightsWrapper>
          <MarkWrapper>
            <p>All Rights Reserved</p>
            <TradeMark />
          </MarkWrapper>
          <YearWrapper>
            <Year />
            <p>Seventh Sense</p>
          </YearWrapper>
        </FooterRightsWrapper>
        <SocialIcons />
      </FooterWrapper>
    </motion.div>
  );
}

export default Footer;
