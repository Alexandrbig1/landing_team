import styled from "styled-components";
import Modal from "react-modal";

export const ModalDiv = styled(Modal)`
  position: absolute;
  top: 50%;
  right: 2.4rem;
  transform: translateY(-50%);
  margin: 0 auto;
  border-radius: 2rem;
  padding: 1.2rem;
  max-width: 540px;
  /* max-height: 540px; */
  width: 100%;
  height: 80%;
  background-color: ${(p) => p.theme.colors.modalColor};
  overflow-y: scroll;
  scroll-behavior: smooth;
  z-index: 200;

  @media (min-width: 365px) {
    padding: 2.4rem;
  }

  @media (min-width: 768px) {
    padding: 4rem;
  }
`;
