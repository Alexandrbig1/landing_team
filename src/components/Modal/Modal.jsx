import { FiSend } from "react-icons/fi";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
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
  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    toast.success(
      "Thank you for your message! We will get back to you shortly."
    );
    reset();
  };
  const onError = (errors) => {
    if (errors.name) {
      toast.error("Name is required. Please enter your name.");
    } else if (errors.email) {
      toast.error("Invalid email address. Please enter a valid email.");
    } else if (errors.message) {
      toast.error("Message is required. Please enter your message.");
    } else {
      toast.error(
        "There was an error submitting the form. Please check your inputs."
      );
    }
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
            <ModalTextLink href="mailto:contact@seventhsense.com">
              contact@seventhsense.com
            </ModalTextLink>{" "}
            or through this form.
          </ModalText>
        </ModalTitleWrapper>
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <ModalInput
            {...register("name")}
            type="text"
            id="name"
            placeholder="Your Name"
          />
          <ModalInput
            {...register("email")}
            type="email"
            id="email"
            placeholder="Your E-mail"
          />
          <ModalTextArea
            {...register("message")}
            id="message"
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
