import SocialIcons from "../SocialIcons/SocialIcons";
import { useTheme } from "../../context/ThemeContext";
import Modal from "../Modal/Modal";
import {
  BurgerContainer,
  CloseBurgerMenu,
  Menu,
  BurgerMenuItems,
  BurgerLogoWrapper,
  MenuBurgerText,
} from "./MenuBurger.styled";

// eslint-disable-next-line react/prop-types
export default function MenuBurger() {
  const { toggleMenu, menuOpen } = useTheme();

  return (
    <Menu $isOpen={menuOpen}>
      <BurgerContainer>
        <CloseBurgerMenu onClick={toggleMenu} />
        <nav>
          <BurgerMenuItems>
            <li onClick={toggleMenu}>
              <MenuBurgerText to="/" end>
                Home
              </MenuBurgerText>
            </li>
            <li onClick={toggleMenu}>
              <MenuBurgerText to="team" end>
                Team
              </MenuBurgerText>
            </li>
            <li onClick={toggleMenu}>
              <MenuBurgerText to="projects" end>
                Projects
              </MenuBurgerText>
            </li>
            <li onClick={toggleMenu}>
              <Modal onlyText={true} />
            </li>
          </BurgerMenuItems>
        </nav>
        <BurgerLogoWrapper>
          <SocialIcons color="#7289d9" />
        </BurgerLogoWrapper>
      </BurgerContainer>
    </Menu>
  );
}
