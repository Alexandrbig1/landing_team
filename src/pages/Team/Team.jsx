import teamData from "../../data/team.json";
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
  TeamProf,
  TeamNameWrapper,
} from "./Team.styled";

function Team() {
  return (
    <TeamWrapper>
      {teamData.map((item, idx) => (
        <TeamImgWrapper key={idx}>
          <TeamImg src={item?.img} alt={item?.name} />
          <TeamNameWrapper>
            <TeamName>{item?.name}</TeamName>
            <TeamProf>{item?.profession}</TeamProf>
          </TeamNameWrapper>
          {item?.github && (
            <TeamSocialLinkGitHub
              href={item?.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${item?.name} GitHub profile`}
            >
              <TeamSocialGitHub />
            </TeamSocialLinkGitHub>
          )}
          {item?.linkedin && (
            <TeamSocialLinkLinkedin
              href={item?.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${item?.name} LinkedIn profile`}
            >
              <TeamSocialLinkedin />
            </TeamSocialLinkLinkedin>
          )}
          {item?.web && (
            <TeamSocialLinkWeb
              href={item?.web}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${item?.name} website`}
            >
              <TeamSocialWeb />
            </TeamSocialLinkWeb>
          )}
          {item?.twitter && (
            <TeamSocialLinkTwitter
              href={item?.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${item?.name} Twitter profile`}
            >
              <TeamSocialTwitter />
            </TeamSocialLinkTwitter>
          )}
        </TeamImgWrapper>
      ))}
    </TeamWrapper>
  );
}

export default Team;
