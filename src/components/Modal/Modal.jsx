import { FiSend } from "react-icons/fi";
import { useState } from "react";
import ModalWindow from "./ModalWindow";
import {
  HeaderButtonModal,
  HeaderIconsModal,
  HeaderTextModal,
} from "./Modal.styled";

// eslint-disable-next-line react/prop-types
function Modal() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <HeaderButtonModal
        type="button"
        aria-label="Open contact form"
        title="Contact"
        onClick={openModal}
      >
        <HeaderIconsModal>
          <FiSend />
        </HeaderIconsModal>
        <HeaderTextModal>Contact</HeaderTextModal>
      </HeaderButtonModal>
      <ModalWindow setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />
    </>
  );
}

export default Modal;
