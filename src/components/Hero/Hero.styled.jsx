import styled from "styled-components";

export const HeroWrapper = styled.section``;

export const HeroTitle = styled.h1`
  font-size: 4.2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.mainTextColor};
  text-shadow: 0 0 10px ${({ theme }) => theme.colors.mainTextColor};
  transition: color 0.3s ease-in-out;
`;
