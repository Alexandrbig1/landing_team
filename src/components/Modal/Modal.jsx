import { FiSend } from "react-icons/fi";
import { HeaderButton, HeaderIcons, HeaderText } from "../Header/Header.styled";
import { Form, ModalDiv } from "./Modal.styled";
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
        <h2>Let's work together!</h2>
        <p>
          You can contact us directly at contact@seventhsense.com or through
          this form.
        </p>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name")}
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
          />
          <input
            {...register("email")}
            type="email"
            id="email"
            name="email"
            placeholder="Your E-mail"
          />
          <textarea
            {...register("message")}
            id="message"
            name="message"
            placeholder="Your Message"
          />
          <button type="submit">Send</button>
        </Form>
      </ModalDiv>
    </>
  );
}

export default Modal;
