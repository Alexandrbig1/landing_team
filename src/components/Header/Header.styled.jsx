import styled from "styled-components";

export const HeaderWrapper = styled.header`
  /* background-color: transparent; */
  color: ${({ theme }) => theme.colors.headerTextColor};
  padding: 1rem;
  width: 100%;
  height: 6.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;
