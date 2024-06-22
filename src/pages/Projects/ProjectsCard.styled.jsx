import styled, { keyframes } from "styled-components";
import { FaGithub } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa6";
import { SiSwagger } from "react-icons/si";

const iconScale = keyframes`
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

const figmaColor = keyframes`
  0% { background: linear-gradient(
    to right,
    #f24e1e,
    #ff7262,
    #a259ff,
    #1abcfe,
    #0acf83
  ); }
  25% { background: linear-gradient(
    to right,
    #0acf83,
    #f24e1e,
    #ff7262,
    #a259ff,
    #1abcfe
  ); }
  50% { background: linear-gradient(
    to right,
    #0acf83,
    #1abcfe,
    #f24e1e,
    #ff7262,
    #a259ff
  ); }
  75% { background: linear-gradient(
    to right,
    #0acf83,
    #1abcfe,
    #a259ff,
    #f24e1e,
    #ff7262
  ); }
  100% { background: linear-gradient(
    to right,
    #0acf83,
    #1abcfe,
    #a259ff,
    #ff7262,
    #f24e1e,
  ); }
`;

export const ProjectsMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.2rem;
`;

export const ProjectsItems = styled.li`
  list-style: none;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.whiteColor};
  background-color: ${({ theme }) => theme.colors.mainBgColor};
  padding: 0.2rem 1.2rem;
  border-radius: 20rem;
  transition: all var(--primary-transition);

  &:hover {
    background-color: ${({ theme }) => theme.colors.mainHoverColor};
  }
`;

export const ProjectsIcons = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const ProjectIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  border-radius: 50rem;
  background-color: ${(p) => p.theme.colors.mainBgColor};
`;

export const ProjectGithubIcon = styled(FaGithub)`
  font-size: 2.2rem;
  color: ${(p) => p.theme.colors.whiteColor};
  transition: all var(--primary-transition);
`;

export const ProjectFigmaIcon = styled(FaFigma)`
  font-size: 2.2rem;
  color: ${(p) => p.theme.colors.whiteColor};
  transition: all var(--primary-transition);
`;

export const ProjectApiIcon = styled(SiSwagger)`
  font-size: 2.2rem;
  color: ${(p) => p.theme.colors.darkTextColor};
  transition: all var(--primary-transition);
`;

export const ProjectFigmaIconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50rem;
  transition: all var(--primary-transition);
  background: linear-gradient(
    to right,
    #f24e1e,
    #ff7262,
    #a259ff,
    #1abcfe,
    #0acf83
  );

  &:hover {
    animation: ${figmaColor} 1s infinite;
  }

  &:hover {
    ${ProjectFigmaIcon} {
      animation: ${iconScale} 2s infinite;
    }
  }
`;

export const ProjectApiIconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50rem;
  background-color: #76eb23;
  transition: all var(--primary-transition);

  &:hover {
    background-color: ${(p) => p.theme.colors.darkTextColor};
  }

  &:hover {
    ${ProjectApiIcon} {
      color: #76eb23;
      animation: ${iconScale} 2s infinite;
    }
  }
`;

export const ProjectGithubIconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50rem;
  background-color: ${(p) => p.theme.colors.darkTextColor};
  transition: all var(--primary-transition);

  &:hover {
    background-color: ${(p) => p.theme.colors.whiteColor};
  }

  &:hover {
    ${ProjectGithubIcon} {
      animation: ${iconScale} 2s infinite;
      &:hover {
        color: ${(p) => p.theme.colors.darkTextColor};
      }
    }
  }
`;
