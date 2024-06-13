import { FiSend } from "react-icons/fi";
import { HeaderButton, HeaderIcons, HeaderText } from "../Header/Header.styled";
import {
  Form,
  ModalBtn,
  ModalDiv,
  ModalInput,
  ModalText,
  ModalTextArea,
  ModalTextLink,
  ModalTitle,
  ModalTitleWrapper,
} from "./Modal.styled";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

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
  const { register, handleSubmit } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

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
        <ModalTitleWrapper>
          <ModalTitle>Let's work together!</ModalTitle>
          <ModalText>
            You can contact us directly at{" "}
            <ModalTextLink href="#">contact@seventhsense.com</ModalTextLink> or
            through this form.
          </ModalText>
        </ModalTitleWrapper>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <ModalInput
            {...register("name")}
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
          />
          <ModalInput
            {...register("email")}
            type="email"
            id="email"
            name="email"
            placeholder="Your E-mail"
          />
          <ModalTextArea
            {...register("message")}
            id="message"
            name="message"
            placeholder="Your Message"
            rows="5"
          />
          <ModalBtn type="submit">Send</ModalBtn>
        </Form>
      </ModalDiv>
    </>
  );
}

export default Modal;
