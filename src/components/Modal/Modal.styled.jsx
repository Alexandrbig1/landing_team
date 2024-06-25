import styled from "styled-components";
import Modal from "react-modal";
import { primaryFont } from "../fonts";
import { IoMdClose } from "react-icons/io";

export const ModalDiv = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  margin: 0 auto;
  border-radius: 2rem;
  padding: 4.8rem 1.2rem;
  width: 100%;
  max-width: 480px;
  height: auto;
  background-color: ${(p) => p.theme.colors.modalColor};
  overflow-y: scroll;
  scroll-behavior: smooth;
  z-index: 200;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.6rem;

  @media (min-width: 768px) {
    left: unset;
    right: 2.4rem;
    padding: 4.8rem 2.4rem;
  }

  @media (min-width: 1440px) {
    height: 80%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
`;

export const ModalTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;

export const ModalTitle = styled.h2`
  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  text-align: center;
  color: ${(p) => p.theme.colors.whiteColor};

  @media (min-width: 1440px) {
    font-size: 3.2rem;
  }
`;

export const ModalText = styled.p`
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.5;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${(p) => p.theme.colors.teamSecondaryTextColor};
`;

export const ModalTextLink = styled.a`
  font-weight: 400;
  text-decoration: underline;
`;

export const ModalInput = styled.input`
  border: none;
  outline: none;
  background: none;
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.5;
  letter-spacing: -0.02em;
  padding: 1.2rem;
  border-radius: 0.4rem;
  background-color: ${(p) => p.theme.colors.whiteColor};
  color: ${(p) => p.theme.colors.darkTextColor};
  transition: all var(--primary-transition);

  &::placeholder {
    color: ${(p) => p.theme.colors.greyColor};
  }

  &:hover,
  &:focus {
    outline: 1px solid #affc41;
  }
`;

export const ModalTextArea = styled.textarea`
  border: none;
  outline: none;
  background: none;
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.5;
  letter-spacing: -0.02em;
  padding: 1.2rem;
  border-radius: 0.4rem;
  background-color: ${(p) => p.theme.colors.whiteColor};
  resize: none;
  transition: all var(--primary-transition);

  &::placeholder {
    color: ${(p) => p.theme.colors.greyColor};
  }

  &:hover,
  &:focus {
    outline: 1px solid #affc41;
  }
`;

export const ModalBtn = styled.button`
  border: none;
  outline: none;
  background: none;
  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.5;
  letter-spacing: -0.02em;
  padding: 1.2rem;
  border-radius: 0.4rem;
  background-color: transparent;
  color: ${(p) => p.theme.colors.whiteColor};
  outline: 1px solid ${(p) => p.theme.colors.whiteColor};
  cursor: pointer;
  transition: all var(--primary-transition);

  &:hover {
    background-color: ${(p) => p.theme.colors.btnHoverColor};
    color: ${(p) => p.theme.colors.whiteColor};
    outline: 1px solid transparent;
  }
`;

export const CloseModal = styled(IoMdClose)`
  color: ${(p) => p.theme.colors.accentLightColor};
  font-size: 2.4rem;
  top: 1.6rem;
  right: 1.6rem;
  position: absolute;
  cursor: pointer;
  transition: 0.3s linear;

  &:hover {
    transform: rotate(90deg);
    color: ${(p) => p.theme.colors.btnHoverColor};
  }
`;

export const HeaderIconsModal = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.headerTextColor};
  transition: all var(--primary-transition);
  transition-delay: 0.25s;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const HeaderTextModal = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  font-family: ${primaryFont};
  color: ${({ theme }) => theme.colors.headerTextColor};
  line-height: 1.28571;

  transition: all var(--primary-transition);

  transform: scale(0);
  transition-delay: 0s;
`;

export const HeaderButtonModal = styled.button`
  border: none;
  outline: none;
  background-color: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  width: 3.2rem;
  height: 3.2rem;
  position: relative;

  border-radius: 50rem;
  background-color: transparent;

  transition: all var(--primary-transition);

  @media (min-width: 768px) {
    &:hover {
      transform: scale(1.05);
      width: 9.2rem;
      background-color: ${({ theme }) => theme.colors.mainBgColor};
    }

    &:hover {
      ${HeaderIconsModal} {
        transform: scale(0);
        transition-delay: 0s;
      }
    }

    &:hover {
      ${HeaderTextModal} {
        transform: scale(1);
        transition-delay: 0.25s;
      }
    }
  }
`;
