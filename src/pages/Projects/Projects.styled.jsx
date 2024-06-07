import styled from "styled-components";
import { primaryFont } from "../../components/fonts";

export const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.mainBgColorLowOp};
  border-radius: 1.2rem;
  width: 80%;
`;

export const ProjectsCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 35%;
  padding: 2.4rem 4.8rem;
`;

export const ProjectsCardTitleWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: end;
`;

export const ProjectsCardTitle = styled.h2`
  color: ${({ theme }) => theme.colors.mainTextColor};
  font-family: ${primaryFont};
  font-weight: 700;
  font-size: 32px;
  line-height: 1.375;
  text-align: center;
`;

export const ProjectsText = styled.p`
  color: ${({ theme }) => theme.colors.mainTextColor};
  font-family: ${primaryFont};
  font-size: 1.4rem;
  line-height: 1.5;
`;

export const ProjectsImage = styled.img`
  width: 100%;
  height: auto;
  /* transform: rotate(9deg); */
  object-fit: cover;
  background-position: top;
  background-repeat: no-repeat;
  /* background-size: cover; */
  transition: all var(--primary-transition);

  /* border-radius: 71% 29% 21% 79% / 58% 67% 33% 42%; */
`;

export const ProjectsImgWrapper = styled.a`
  width: 65%;
  height: 42rem;
  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: ${(p) => p.theme.colors.thumbColor};
  }
  &::-webkit-scrollbar-track {
    border-radius: 12px;
    background-color: ${(p) => p.theme.colors.thumbBgColor};
  }

  transition: all var(--primary-transition);

  &:hover {
    ${ProjectsImage} {
      transform: rotate(7deg) scale(0.95);
      border-radius: 2.4rem;
    }
  }

  &:hover {
    padding: 2.4rem 4.8rem 0;
  }
`;
