import { useRef } from "react";
import Button from "./Button";
import Input from "./Input";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_6taoynp", "template_e5o2b1e", form.current, {
        publicKey: "YQG6KBIbjLSpWTI2e",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      // onSubmit={(e) => {
      //   e.preventDefault();
      //   const { name, email, message } = e.target;
      //   console.log("form_event: ", {
      //     name: name.value,
      //     email: email.value,
      //     message: message.value,
      //   });
      // }}
    >
      <div className="flex flex-wrap sm:flex-nowrap md:flex-wrap lg:flex-nowrap gap-4">
        <Input
          required
          name="user_name"
          type="text"
          placeholder="Enter your name"
          className="h-12 w-full"
        />
        <Input
          required
          name="user_email"
          className="h-12 w-full"
          type="email"
          placeholder="Enter your email"
        />
      </div>
      <Input
        required
        name="message"
        className="min-h-28 mt-4"
        type="textarea"
        placeholder="Enter your message"
      />
      <div className="mt-4">
        <Button
          className="w-full sm:w-auto sm:float-right md:w-full lg:w-auto lg:float-right"
          type="submit"
        >
          Send Now
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
