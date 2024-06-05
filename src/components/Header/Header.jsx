import Logo from "../Logo/Logo";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { HeaderWrapper } from "./Header.styled";

// eslint-disable-next-line react/prop-types
function Header() {
  // function Header({ toggleTheme, isDarkTheme }) {
  return (
    <HeaderWrapper>
      <Logo />
      <ThemeSwitcher />
      {/* <ThemeSwitcher toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} /> */}
    </HeaderWrapper>
  );
}

export default Header;
