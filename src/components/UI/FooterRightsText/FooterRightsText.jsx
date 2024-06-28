import Year from "../../Year/Year";
import {
  FooterRightsWrapper,
  FooterText,
  MarkWrapper,
  TradeMark,
  YearWrapper,
} from "../../Footer/Footer.styled";

function FooterRightsText() {
  return (
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
  );
}

export default FooterRightsText;
