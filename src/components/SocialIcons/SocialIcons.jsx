import { DiscordIcon, Link } from "./SocialIcons.styled";

function SocialIcons() {
  return (
    <div>
      <Link
        href="https://discord.gg/TRufb4Qy"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Join Alex Smagin's Discord server"
      >
        <DiscordIcon />
      </Link>
    </div>
  );
}

export default SocialIcons;
