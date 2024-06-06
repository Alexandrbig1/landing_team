import { FiSend } from "react-icons/fi";
import { HeaderButton, HeaderIcons, HeaderText } from "../Header/Header.styled";
import { ModalDiv } from "./Modal.styled";
import { useState } from "react";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: 100,
  },
};

// eslint-disable-next-line react/prop-types
function Modal() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <HeaderButton type="button" onClick={openModal}>
        <HeaderIcons>
          <FiSend />
        </HeaderIcons>
        <HeaderText>Contact</HeaderText>
      </HeaderButton>
      <ModalDiv
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Contact Modal Window"
      >
        open
      </ModalDiv>
    </>
  );
}

export default Modal;
