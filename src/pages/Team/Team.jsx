import {
  TeamImg,
  TeamImgWrapper,
  TeamName,
  TeamSocialGitHub,
  TeamSocialLinkGitHub,
  TeamSocialLinkLinkedin,
  TeamSocialLinkWeb,
  TeamSocialLinkTwitter,
  TeamSocialLinkedin,
  TeamSocialTwitter,
  TeamSocialWeb,
  TeamWrapper,
} from "./Team.styled";

function Team() {
  return (
    <TeamWrapper>
      <TeamImgWrapper>
        <TeamImg src="/public/images/avatar.jpg" alt="" />
        <TeamName>Alex Smagin</TeamName>
        <TeamSocialLinkWeb
          href="https://www.alexsmagin.dev/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Alex website"
        >
          <TeamSocialWeb />
        </TeamSocialLinkWeb>
        <TeamSocialLinkGitHub
          href="https://github.com/Alexandrbig1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Alex GitHub profile"
        >
          <TeamSocialGitHub />
        </TeamSocialLinkGitHub>
        <TeamSocialLinkTwitter
          href="https://twitter.com/alexsmagin29"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Alex Twitter profile"
        >
          <TeamSocialTwitter />
        </TeamSocialLinkTwitter>
        <TeamSocialLinkLinkedin
          href="https://www.linkedin.com/in/alex-smagin29/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Alex LinkedIn profile"
        >
          <TeamSocialLinkedin />
        </TeamSocialLinkLinkedin>
      </TeamImgWrapper>
      <TeamImgWrapper>
        <TeamImg src="/public/images/avatar.jpg" alt="" />
        <TeamName>Alexander Smagin</TeamName>
        <TeamSocialLinkWeb
          href="https://www.alexsmagin.dev/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Alex website"
        >
          <TeamSocialWeb />
        </TeamSocialLinkWeb>
        <TeamSocialLinkGitHub
          href="https://github.com/Alexandrbig1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Alex GitHub profile"
        >
          <TeamSocialGitHub />
        </TeamSocialLinkGitHub>
        <TeamSocialLinkTwitter
          href="https://twitter.com/alexsmagin29"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Alex Twitter profile"
        >
          <TeamSocialTwitter />
        </TeamSocialLinkTwitter>
        <TeamSocialLinkLinkedin
          href="https://www.linkedin.com/in/alex-smagin29/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Alex LinkedIn profile"
        >
          <TeamSocialLinkedin />
        </TeamSocialLinkLinkedin>
      </TeamImgWrapper>
    </TeamWrapper>
  );
}

export default Team;
