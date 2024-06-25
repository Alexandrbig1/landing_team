import SocialIcons from "../SocialIcons/SocialIcons";
import { useTheme } from "../../context/ThemeContext";
import {
  BurgerContainer,
  CloseBurgerMenu,
  Menu,
  BurgerMenuItems,
  BurgerLogoWrapper,
  MenuBurgerText,
  MenuBurgerLinkIcon,
  MenuBurgerItems,
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
            <MenuBurgerItems onClick={toggleMenu}>
              <MenuBurgerText to="/landing_team/" end>
                <MenuBurgerLinkIcon />
                Home
              </MenuBurgerText>
            </MenuBurgerItems>
            <MenuBurgerItems onClick={toggleMenu}>
              <MenuBurgerText to="team" end>
                <MenuBurgerLinkIcon />
                Team
              </MenuBurgerText>
            </MenuBurgerItems>
            <MenuBurgerItems onClick={toggleMenu}>
              <MenuBurgerText to="projects" end>
                <MenuBurgerLinkIcon />
                Projects
              </MenuBurgerText>
            </MenuBurgerItems>
          </BurgerMenuItems>
        </nav>
        <BurgerLogoWrapper>
          <SocialIcons color="#7289d9" />
        </BurgerLogoWrapper>
      </BurgerContainer>
    </Menu>
  );
}
