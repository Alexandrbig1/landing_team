import { FiSend } from "react-icons/fi";
import { useState } from "react";
import { HeaderButton, HeaderIcons, HeaderText } from "../Header/Header.styled";
import ModalWindow from "./ModalWindow";

// eslint-disable-next-line react/prop-types
function Modal() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <HeaderButton type="button" onClick={openModal}>
        <HeaderIcons>
          <FiSend />
        </HeaderIcons>
        <HeaderText>Contact</HeaderText>
      </HeaderButton>
      <ModalWindow setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />
    </>
  );
}

export default Modal;
