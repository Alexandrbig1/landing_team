import Year from "../Year/Year";
import {
  FooterWrapper,
  MarkWrapper,
  TradeMark,
  YearWrapper,
} from "./Footer.styled";

function Footer() {
  return (
    <FooterWrapper>
      <MarkWrapper>
        <p>All Rights Reserved</p>
        <TradeMark />
      </MarkWrapper>
      <YearWrapper>
        <Year />
        <p>Seventh Sense</p>
      </YearWrapper>
    </FooterWrapper>
  );
}

export default Footer;
