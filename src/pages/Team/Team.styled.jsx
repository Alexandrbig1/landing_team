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
  gap: 6.4rem;
  margin: 0 auto;
  border-radius: 1.2rem;
  padding: 2.4rem;
  background-color: ${({ theme }) => theme.colors.mainBgColorLowOp};
`;

export const TeamImg = styled.img`
  width: 22rem;
  height: 22rem;
  border-radius: 100rem;
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
  top: -1.2rem;
  left: -1.2rem;

  transition: all var(--primary-transition);
  transition: opacity var(--primary-transition);
  transition-delay: 0.1s;

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
  transition-delay: 0.3s;

  position: absolute;
  top: -1.2rem;
  right: -1.2rem;

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
  transition-delay: 0.6s;

  position: absolute;
  bottom: 2.4rem;
  left: -2.4rem;

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
  transition-delay: 0.8s;

  position: absolute;
  bottom: 2.4rem;
  right: -2.4rem;

  &:hover {
    cursor: pointer;
  }
  &:hover {
    ${TeamSocialLinkedin} {
      animation: ${scale} 1s ease-in-out infinite;
    }
  }
`;

export const TeamName = styled.h3`
  font-family: ${primaryFont};
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 1.14286;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  text-align: center;
  color: ${({ theme }) => theme.colors.whiteColor};
`;

export const TeamImgWrapper = styled.div`
  width: 22rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
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
