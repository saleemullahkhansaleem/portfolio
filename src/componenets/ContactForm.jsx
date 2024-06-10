import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import emailjs from "@emailjs/browser";
import Spinner from "./Spinner";
import { FaCheckCircle } from "react-icons/fa";
import Toast from "./Toast";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    console.log("innnnn");
    try {
      emailjs
        .sendForm("service_6taoynp", "template_e5o2b1e", form.current, {
          publicKey: "YQG6KBIbjLSpWTI2e",
        })
        .then(
          () => {
            setMessage({ error: false, message: "Message sent successfully!" });
            form.current.reset();
            setLoading(false);
            setTimeout(() => {
              setMessage(null);
            }, 5000);
          },
          (error) => {
            setMessage({ error: true, message: "Some thing went wrong!" });
            console.error(error);
            setLoading(false);
            setTimeout(() => {
              setMessage(null);
            }, 5000);
          }
        );
    } catch (error) {
      setMessage({ error: true, message: "Some thing went wrong!" });
      console.error(error);
      setLoading(false);
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
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
      <div className="mt-4 flex flex-wrap sm:flex-nowrap md:flex-wrap lg:flex-nowrap justify-end gap-4">
        {!message && (
          <Toast
            className="w-full sm:w-auto md:w-full lg:w-auto"
            error={message?.error}
          >
            {message?.message}
          </Toast>
        )}
        <Button
          className="w-full sm:w-auto md:w-full lg:w-auto"
          type="submit"
          title="Send"
        >
          {loading ? <Spinner /> : "Send Now"}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
