import { LogoImg, LogoWrapper } from "./Logo.styled";

function Logo() {
  return (
    <LogoWrapper>
      <LogoImg src="/public/logo.png" alt="logo" />
    </LogoWrapper>
  );
}

export default Logo;
