import Container from "../componenets/Container";
import Heading from "../componenets/Heading";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import SocialLinks from "../componenets/SocialLinks";
import { Data } from "../Data";
import { useEffect } from "react";
import ContactForm from "../componenets/ContactForm";

const Contact = () => {
  useEffect(() => {}, []);

  return (
    <Container id="contact" full className="flex flex-col justify-center">
      <Heading title="Contact me" text="Let's" colorText="Talk Together" />
      <div className="p-4 w-full mx-auto flex flex-wrap md:flex-nowrap items-center justify-between gap-8">
        <SocialLinks
          className="max-w-xl mx-auto px-8"
          iconSize="2xl"
          data={Data.contactLinks}
        />
        <div className="w-full max-w-3xl">
          <ContactForm />
        </div>
      </div>
      <div className="w-full flex flex-wrap md:flex-nowrap items-center justify-center gap-4">
        <div className="text-lg flex gap-2">
          <FaLocationDot className="text-lime-500" />
          <p className="text-sm"> Shinkiari, P.O #21140 Mansehra, Pakistan</p>
        </div>
        <p className="hidden md:block">|</p>
        <a href="tel:+923405045889" className="text-lg flex gap-2" title="Call">
          <IoCall className=" text-lime-500" />
          <p className="text-sm"> +92 340 5045 889</p>
        </a>
        <p className="hidden md:block">|</p>
        <a
          href="mailto:salikhanswati@gmail.com"
          className="text-lg flex gap-2"
          title="Send an email"
        >
          <IoMdMail className=" text-lime-500" />
          <p className="text-sm"> salikhanswati@gmail.com</p>
        </a>
      </div>
    </Container>
  );
};

export default Contact;
