import { FiSend } from "react-icons/fi";
import { useState } from "react";
import { HeaderButton, HeaderIcons, HeaderText } from "../Header/Header.styled";
import ModalWindow from "./ModalWindow";

// eslint-disable-next-line react/prop-types
function Modal({ onlyText }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <HeaderButton
        style={onlyText ? { width: "100%", height: "100%" } : {}}
        type="button"
        onClick={openModal}
      >
        {onlyText ? (
          <HeaderText style={{ transform: "scale(1)" }}>Contact</HeaderText>
        ) : (
          <>
            <HeaderIcons>
              <FiSend />
            </HeaderIcons>
            <HeaderText>Contact</HeaderText>
          </>
        )}
      </HeaderButton>
      <ModalWindow setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />
    </>
  );
}

export default Modal;
