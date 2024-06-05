import styled from "styled-components";

export const FooterWrapper = styled.footer`
  color: ${({ theme }) => theme.colors.footerTextColor};
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color var(--primary-transition);
  position: absolute;
  bottom: 0;
  left: 0;
`;
