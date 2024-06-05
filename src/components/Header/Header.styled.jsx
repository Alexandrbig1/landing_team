import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { primaryFont } from "../fonts";

export const HeaderWrapper = styled.header`
  /* background-color: transparent; */
  color: ${({ theme }) => theme.colors.headerTextColor};
  padding: 1.2rem;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const HeaderMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const HeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const HeaderItems = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const HeaderIcons = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.headerTextColor};
  transition: all var(--primary-transition);
  transition-delay: 0.25s;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const HeaderText = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  font-family: ${primaryFont};
  color: ${({ theme }) => theme.colors.headerTextColor};
  line-height: 1.28571;

  transition: all var(--primary-transition);

  transform: scale(0);
  transition-delay: 0s;
`;

export const HeaderButton = styled.button`
  border: none;
  outline: none;
  background-color: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  width: 3.2rem;
  height: 3.2rem;
  position: relative;

  border-radius: 50rem;
  background-color: transparent;

  transition: all var(--primary-transition);

  &:hover {
    transform: scale(1.05);
    width: 9.2rem;
    background-color: ${({ theme }) => theme.colors.mainBgColor};
  }

  &:hover {
    ${HeaderIcons} {
      transform: scale(0);
      transition-delay: 0s;
    }
  }

  &:hover {
    ${HeaderText} {
      transform: scale(1);
      transition-delay: 0.25s;
    }
  }
`;

export const HeaderLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  width: 3.2rem;
  height: 3.2rem;
  position: relative;

  border-radius: 50rem;
  background-color: transparent;

  transition: all var(--primary-transition);

  &:hover {
    transform: scale(1.05);
    width: 9.2rem;
    background-color: ${({ theme }) => theme.colors.mainBgColor};
  }

  &:hover {
    ${HeaderIcons} {
      transform: scale(0);
      transition-delay: 0s;
    }
  }

  &:hover {
    ${HeaderText} {
      transform: scale(1);
      transition-delay: 0.25s;
    }
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.mainBgColor};
  }
`;
