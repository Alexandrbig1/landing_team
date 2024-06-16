import styled from "styled-components";
import { primaryFont } from "../fonts";

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.2rem;
  height: 3.2rem;
  background-color: #fff;
  border-radius: 50rem;
`;

export const LogoImg = styled.img`
  width: 3.6rem;
  height: 3.6rem;
`;

export const LogoText = styled.span`
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.3444;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.accentColor};
`;
