import styled from "styled-components";
import { primaryFont } from "../../components/fonts";
import {
  TbSquareArrowLeftFilled,
  TbSquareArrowRightFilled,
} from "react-icons/tb";

export const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 1.2rem;
  width: 80%;
  height: 42rem;
`;

export const ProjectsWrapper = styled.div`
  gap: 2.4rem;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.mainBgColorLowOp};
  position: relative;
  background-color: red;
`;

/* export const ProjectsCardWrapper = styled.li` */
export const ProjectsCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.mainBgColorLowOp};
  border-radius: 1.2rem;
  width: 100%;
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
  /* overflow-x: hidden; */
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

export const ProjectsArrowLeft = styled(TbSquareArrowLeftFilled)`
  font-size: 3.2rem;
  color: ${({ theme }) => theme.colors.mainBgColor};

  &:hover {
    cursor: pointer;
  }
`;

export const ProjectsArrowRight = styled(TbSquareArrowRightFilled)`
  font-size: 3.2rem;
  color: ${({ theme }) => theme.colors.mainBgColor};

  &:hover {
    cursor: pointer;
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
export const ProjectsBtnRight = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: all var(--primary-transition);
  color: #fff;
  z-index: 10;
`;

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
