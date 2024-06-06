import styled from "styled-components";
import Modal from "react-modal";

export const ModalDiv = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0 auto;
  transform: translate(-50%, -50%);
  border-radius: 2rem;
  padding: 1.2rem;
  max-width: 982px;
  max-height: 720px;
  width: 90%;
  height: 90%;
  background-color: ${(p) => p.theme.colors.mainBgColor};
  background-color: aliceblue;
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
