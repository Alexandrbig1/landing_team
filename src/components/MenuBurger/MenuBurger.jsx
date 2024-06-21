import SocialIcons from "../SocialIcons/SocialIcons";
import { useTheme } from "../../context/ThemeContext";
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
              <MenuBurgerText to="/landing_team/" end>
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
          </BurgerMenuItems>
        </nav>
        <BurgerLogoWrapper>
          <SocialIcons color="#7289d9" />
        </BurgerLogoWrapper>
      </BurgerContainer>
    </Menu>
  );
}
