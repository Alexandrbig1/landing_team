import styled from "styled-components";
import { PiTrademarkRegisteredFill } from "react-icons/pi";
import { primaryFont } from "../fonts";

export const FooterWrapper = styled.footer`
  padding: 1.2rem;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  /* align-items: center; */
  gap: 1.2rem;
  transition: background-color var(--primary-transition);
  position: absolute;
  bottom: 0;
  left: 0;

  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.footerTextColor};

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: end;
    gap: 0.4rem;
  }
`;

export const FooterRightsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;

  @media (min-width: 385px) {
    flex-direction: row;
  }
`;

export const MarkWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const YearWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.3444;
  letter-spacing: -0.02em;
  /* color: ${({ theme }) => theme.colors.footerTextColor}; */
  color: ${(p) =>
    p?.$burger
      ? p.theme.colors.burgerMenuFooterTextColor
      : p.theme.colors.footerTextColor};
  white-space: nowrap;
`;

export const TradeMark = styled(PiTrademarkRegisteredFill)`
  color: ${(p) =>
    p?.$burger
      ? p.theme.colors.burgerMenuFooterTextColor
      : p.theme.colors.footerTextColor};
  font-size: 1.6rem;
`;

export const FooterText = styled.p`
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.3444;
  letter-spacing: -0.02em;
  color: ${(p) =>
    p?.$burger
      ? p.theme.colors.burgerMenuFooterTextColor
      : p.theme.colors.footerTextColor};
  white-space: nowrap;
`;
