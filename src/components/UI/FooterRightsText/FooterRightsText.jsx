import Year from "../../Year/Year";
import {
  FooterRightsWrapper,
  FooterText,
  MarkWrapper,
  TradeMark,
  YearWrapper,
} from "../../Footer/Footer.styled";

// eslint-disable-next-line react/prop-types
function FooterRightsText({ burgerMenu }) {
  return (
    <FooterRightsWrapper>
      <MarkWrapper>
        <FooterText burgerMenu={burgerMenu}>All Rights Reserved</FooterText>
        <TradeMark burgerMenu={burgerMenu} />
      </MarkWrapper>
      <YearWrapper burgerMenu={burgerMenu}>
        <Year />
        <FooterText burgerMenu={burgerMenu}>Seventh Sense</FooterText>
      </YearWrapper>
    </FooterRightsWrapper>
  );
}

export default FooterRightsText;
