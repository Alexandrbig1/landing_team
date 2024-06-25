import styled from "styled-components";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { primaryFont } from "../fonts";
import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

export const IconMenuWrapper = styled.div`
  cursor: pointer;
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MenuBurgerContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-color: ${(p) => p.theme.colors.burgerOverlay};
  z-index: 1000;
  transform: translateX(${(props) => (props?.$isOpen ? "0%" : "-150%")});
  transition: transform 0.3s ease-in-out;
`;

export const IconMenu = styled(TiThMenu)`
  font-size: 2.4rem;
  color: ${(p) => p.theme.colors.whiteColor};
`;

export const CloseBurgerMenu = styled(IoMdClose)`
  color: ${(p) => p.theme.colors.accentLightColor};
  font-size: 2.4rem;
  top: 1.6rem;
  right: 1.6rem;
  position: absolute;
  cursor: pointer;
  transition: 0.3s linear;

  &:hover {
    transform: rotate(90deg);
    color: ${(p) => p.theme.colors.accentColor};
  }

  @media (min-width: 768px) {
    font-size: 3.6rem;
  }
`;

export const BurgerContainer = styled.div`
  position: relative;
  left: 0;
  top: 10rem;
  width: 100%;
  max-width: 311px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.8rem;

  padding: 4rem;
  color: ${(p) => p.theme.colors.mainTextColor};
  border-radius: 20px;
  z-index: 500;
`;

export const BurgerMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const BurgerLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`;

export const MenuBurgerLinkIcon = styled(FaLongArrowAltRight)`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.accentLightColor};
  opacity: 0;
  transition: all var(--primary-transition);
`;

export const MenuBurgerItems = styled.li`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const MenuBurgerText = styled(NavLink)`
  font-size: 2rem;
  font-weight: 400;
  font-family: ${primaryFont};
  color: ${({ theme }) => theme.colors.mainTextColorRev};
  background-color: transparent;
  line-height: 1.28571;
  display: flex;
  align-items: center;
  gap: 1.2rem;

  &.active {
    color: ${({ theme }) => theme.colors.accentLightColor};

    ${MenuBurgerLinkIcon} {
      opacity: 1;
    }
  }
`;
