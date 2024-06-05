import Logo from "../Logo/Logo";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { FaHome } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import {
  HeaderButton,
  HeaderIcons,
  HeaderItems,
  HeaderLink,
  HeaderMenu,
  HeaderMenuWrapper,
  HeaderText,
  HeaderWrapper,
} from "./Header.styled";

// eslint-disable-next-line react/prop-types
function Header() {
  // function Header({ toggleTheme, isDarkTheme }) {
  return (
    <HeaderWrapper>
      <Logo />
      <HeaderMenuWrapper>
        <nav>
          <HeaderMenu>
            <HeaderItems>
              <HeaderLink to="/" end>
                <HeaderIcons>
                  <FaHome />
                </HeaderIcons>
                <HeaderText>Home</HeaderText>
              </HeaderLink>
            </HeaderItems>
            <HeaderItems>
              <HeaderLink to="team" end>
                <HeaderIcons>
                  <FaPeopleGroup />
                </HeaderIcons>
                <HeaderText>Team</HeaderText>
              </HeaderLink>
            </HeaderItems>
            <HeaderItems>
              <HeaderLink to="projects" end>
                <HeaderIcons>
                  <GrProjects />
                </HeaderIcons>
                <HeaderText>Projects</HeaderText>
              </HeaderLink>
            </HeaderItems>
            <HeaderItems>
              <HeaderButton>
                <HeaderIcons>
                  <FiSend />
                </HeaderIcons>
                <HeaderText>Contact</HeaderText>
              </HeaderButton>
            </HeaderItems>
          </HeaderMenu>
        </nav>
        <ThemeSwitcher />
      </HeaderMenuWrapper>
      {/* <ThemeSwitcher toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} /> */}
    </HeaderWrapper>
  );
}

export default Header;
