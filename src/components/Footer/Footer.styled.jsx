import styled from "styled-components";
import { PiTrademarkRegisteredFill } from "react-icons/pi";
import { primaryFont } from "../fonts";

export const FooterWrapper = styled.footer`
  color: ${({ theme }) => theme.colors.footerTextColor};
  padding: 1.2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.4rem;
  transition: background-color var(--primary-transition);
  position: absolute;
  bottom: 0;
  left: 0;

  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.footerTextColor};
`;

export const FooterRightsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
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
`;

export const TradeMark = styled(PiTrademarkRegisteredFill)`
  color: ${({ theme }) => theme.colors.footerTextColor};
  font-size: 1.6rem;
`;

export const FooterText = styled.p`
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.3444;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.footerTextColor};
  white-space: nowrap;
`;
