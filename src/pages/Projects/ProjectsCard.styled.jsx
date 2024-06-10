import styled from "styled-components";

export const ProjectsMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.2rem;
`;

export const ProjectsItems = styled.li`
  list-style: none;
  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.mainBgColor};
  padding: 0.2rem 1.2rem;
  border-radius: 20rem;
  transition: all var(--primary-transition);

  &:hover {
    background-color: ${({ theme }) => theme.colors.mainHoverColor};
  }
`;
