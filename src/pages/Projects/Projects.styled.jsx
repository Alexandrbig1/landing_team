import styled from "styled-components";
import { primaryFont } from "../../components/fonts";
import {
  TbSquareArrowLeftFilled,
  TbSquareArrowRightFilled,
} from "react-icons/tb";

export const ProjectsContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 1.2rem;
  width: 80%;
  margin-top: 6.2rem;
  margin-bottom: 12.2rem;
  /* overflow: hidden; */

  @media (min-width: 1440px) {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const ProjectsWrapper = styled.div`
  gap: 2.4rem;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.mainBgColorLowOp};
  position: relative;
`;

export const ProjectsCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.mainBgColorLowOp};
  border-radius: 1.2rem;
  width: 100%;

  @media (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const ProjectsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  padding: 2.4rem 2.4rem;
  width: 100%;

  @media (min-width: 1440px) {
    width: 35%;
    padding: 2.4rem 4.8rem;
  }
`;

export const ProjectsCardTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
  position: relative;
`;

export const ProjectsCardNumberWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 2.4rem;
  border-radius: 50rem;
  border: 1px solid ${({ theme }) => theme.colors.mainBgColor};
  position: absolute;
  top: -1.2rem;
  left: -3.6rem;

  @media (min-width: 768px) {
    top: -1.2rem;
    left: 2.4rem;
  }

  @media (min-width: 1440px) {
    top: -2.4rem;
    left: -2.4rem;
  }
`;

export const ProjectsCardNumber = styled.h3`
  color: ${({ theme }) => theme.colors.whiteColor};
  font-family: ${primaryFont};
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 1.375;
`;

export const ProjectsCardTitle = styled.h2`
  color: ${({ theme }) => theme.colors.whiteColor};
  font-family: ${primaryFont};
  font-weight: 700;
  font-size: 32px;
  line-height: 1.375;
  text-align: center;
`;

export const ProjectsText = styled.p`
  color: ${({ theme }) => theme.colors.whiteColor};
  font-family: ${primaryFont};
  font-size: 1.4rem;
  line-height: 1.5;
`;

export const ProjectsImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  background-position: top;
  background-repeat: no-repeat;
  transition: all var(--primary-transition);
`;

export const ProjectsImgWrapper = styled.a`
  width: 100%;
  height: 24rem;
  overflow-y: scroll;
  overflow-x: hidden;

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

  @media (min-width: 1440px) {
    width: 65%;
    height: 46rem;
  }
`;

export const ProjectsArrowLeft = styled(TbSquareArrowLeftFilled)`
  font-size: 3.2rem;
  color: ${({ theme }) => theme.colors.mainBgColor};
  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.btnHoverColor};
  }
`;

export const ProjectsArrowRight = styled(TbSquareArrowRightFilled)`
  font-size: 3.2rem;
  color: ${({ theme }) => theme.colors.mainBgColor};
  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.btnHoverColor};
  }
`;

export const ProjectsBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: all var(--primary-transition);
  color: #fff;
  z-index: 10;
`;

export const ProjectsBtnRight = styled(ProjectsBtn)``;

export const ProjectsArrowWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1.2rem;
`;

export const PaginationWrapper = styled.div`
  margin-top: 2.4rem;
  display: flex;
  flex-direction: row-reverse;
`;

export const CustomPagination = styled.div`
  transition: all var(--primary-transition);
  text-align: center;

  .swiper-pagination-bullet {
    width: 1rem;
    height: 1rem;
    background-color: #000000;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.colors.mainBgColor};
  }
`;
