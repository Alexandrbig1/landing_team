import styled from "styled-components";
import Modal from "react-modal";
import { primaryFont } from "../fonts";

export const ModalDiv = styled(Modal)`
  position: absolute;
  top: 50%;
  right: 2.4rem;
  transform: translateY(-50%);
  margin: 0 auto;
  border-radius: 2rem;
  padding: 1.2rem;
  max-width: 480px;
  width: 100%;
  height: 80%;
  background-color: ${(p) => p.theme.colors.modalColor};
  overflow-y: scroll;
  scroll-behavior: smooth;
  z-index: 200;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.6rem;

  @media (min-width: 365px) {
    padding: 2.4rem;
  }

  @media (min-width: 768px) {
    padding: 4rem;
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
  font-size: 3.2rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  text-align: center;
  color: ${(p) => p.theme.colors.whiteColor};
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
  cursor: pointer;
  color: #292524;
`;
