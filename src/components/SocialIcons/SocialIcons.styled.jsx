import styled from "styled-components";
import { BsDiscord } from "react-icons/bs";

export const SocialLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  align-self: flex-end;
`;

export const Link = styled.a`
  display: block;
  width: 3.6rem;
  height: 3.6rem;
`;

export const DiscordIcon = styled(BsDiscord)`
  color: ${(p) => (p && p.$color ? p.$color : p.theme.colors.headerTextColor)};
  font-size: 3.6rem;
  transition: color 0.2s linear;
  padding: 0.6rem;
  border-radius: 50%;

  &:hover {
    color: #7289d9;
  }
`;

export const WoolfImg = styled.img`
  width: 3.6rem;
  height: 3.6rem;
`;
