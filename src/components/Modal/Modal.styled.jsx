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
  color: #292524;

  &::placeholder {
    color: ${(p) => p.theme.colors.greyColor};
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

  &::placeholder {
    color: ${(p) => p.theme.colors.greyColor};
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
  background-color: ${(p) => p.theme.colors.whiteColor};
  color: ${(p) => p.theme.colors.darkTextColor};
  cursor: pointer;
  transition: all var(--primary-transition);

  &:hover {
    background-color: ${(p) => p.theme.colors.btnHoverColor};
    color: ${(p) => p.theme.colors.whiteColor};
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
