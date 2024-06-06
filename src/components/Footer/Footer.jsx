import SocialIcons from "../SocialIcons/SocialIcons";
import Year from "../Year/Year";
import {
  FooterRightsWrapper,
  FooterWrapper,
  MarkWrapper,
  TradeMark,
  YearWrapper,
} from "./Footer.styled";

function Footer() {
  return (
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
  );
}

export default Footer;
