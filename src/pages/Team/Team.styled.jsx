import styled, { keyframes } from "styled-components";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { primaryFont } from "../../components/fonts";

const scale = keyframes`
  0% {
transform: scale(1);
  }
  50% {
transform: scale(1.2);
  }
  100% {
transform: scale(1);
  }
`;

export const TeamWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: auto;
  max-height: 100vh;
  overflow: scroll;
  gap: 3.2rem;
  margin: 0 auto;
  border-radius: 1.2rem;
  padding: 2.4rem 1.2rem;
`;

export const TeamImg = styled.img`
  width: 18rem;
  height: 18rem;
  border-radius: 100rem;
  object-fit: cover;
`;

export const TeamSocialWeb = styled(TbWorldWww)`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.whiteColor};
  transition: all var(--primary-transition);
`;

export const TeamSocialGitHub = styled(FaGithub)`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.whiteColor};
  transition: all var(--primary-transition);
`;

export const TeamSocialTwitter = styled(FaXTwitter)`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.whiteColor};
  transition: all var(--primary-transition);
`;

export const TeamSocialLinkedin = styled(FaLinkedinIn)`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.whiteColor};
  transition: all var(--primary-transition);
`;

export const TeamSocialLinkWeb = styled.a`
  background-color: ${({ theme }) => theme.colors.mainBgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50rem;
  padding: 0.8rem;
  opacity: 0;

  position: absolute;
  bottom: 6.2rem;
  left: 0.4rem;

  transition: all var(--primary-transition);
  transition: opacity var(--primary-transition);
  transition-delay: 0.5s;

  &:hover {
    cursor: pointer;
  }

  &:hover {
    ${TeamSocialWeb} {
      animation: ${scale} 1s ease-in-out infinite;
    }
  }
`;

export const TeamSocialLinkGitHub = styled.a`
  background-color: ${({ theme }) => theme.colors.mainBgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50rem;
  padding: 0.8rem;
  opacity: 0;

  transition: all var(--primary-transition);
  transition: opacity var(--primary-transition);
  transition-delay: 0.1s;

  position: absolute;
  top: 0.4rem;
  left: 0.4rem;

  &:hover {
    cursor: pointer;
  }

  &:hover {
    ${TeamSocialGitHub} {
      animation: ${scale} 1s ease-in-out infinite;
    }
  }
`;

export const TeamSocialLinkTwitter = styled.a`
  background-color: ${({ theme }) => theme.colors.mainBgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50rem;
  padding: 0.8rem;
  opacity: 0;

  transition: all var(--primary-transition);
  transition: opacity var(--primary-transition);
  transition-delay: 0.75s;

  position: absolute;
  bottom: 6.2rem;
  right: 0.4rem;

  &:hover {
    cursor: pointer;
  }

  &:hover {
    ${TeamSocialTwitter} {
      animation: ${scale} 1s ease-in-out infinite;
    }
  }
`;

export const TeamSocialLinkLinkedin = styled.a`
  background-color: ${({ theme }) => theme.colors.mainBgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50rem;
  padding: 0.8rem;
  opacity: 0;
  transition: all var(--primary-transition);
  transition: opacity var(--primary-transition);
  transition-delay: 0.3s;

  position: absolute;
  top: 0.4rem;
  right: 0.4rem;

  &:hover {
    cursor: pointer;
  }
  &:hover {
    ${TeamSocialLinkedin} {
      animation: ${scale} 1s ease-in-out infinite;
    }
  }
`;

export const TeamNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
`;

export const TeamName = styled.h3`
  font-family: ${primaryFont};
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 1.14286;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  text-align: center;
  color: ${({ theme }) => theme.colors.whiteColor};
`;

export const TeamProf = styled.span`
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.teamSecondaryTextColor};
  line-height: 1.5;
  letter-spacing: -0.02em;
  text-align: center;
`;

export const TeamImgWrapper = styled.div`
  width: 22rem;
  height: auto;
  border-radius: 1.2rem;
  padding: 1.2rem;
  background-color: ${({ theme }) => theme.colors.mainBgColorLowOp};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  position: relative;

  &:hover {
    ${TeamSocialLinkWeb} {
      opacity: 1;
    }
  }

  &:hover {
    ${TeamSocialLinkGitHub} {
      opacity: 1;
      animation-delay: 0.25s;
    }
  }

  &:hover {
    ${TeamSocialLinkTwitter} {
      opacity: 1;
      animation-delay: 0.5s;
    }
  }

  &:hover {
    ${TeamSocialLinkLinkedin} {
      opacity: 1;
      animation-delay: 0.75s;
    }
  }
`;
