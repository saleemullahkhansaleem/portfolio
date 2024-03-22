import Container from "../componenets/Container";
import Heading from "../componenets/Heading";
import Button from "../componenets/Button";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import Input from "../componenets/Input";
import SocialLinks from "../componenets/SocialLinks";
import { Data } from "../Data";

const Contact = () => {
  return (
    <Container id="contact" full className="flex flex-col justify-center">
      <Heading text="Let's" colorText="Talk Together" />
      <div className="p-4 w-full mx-auto flex flex-wrap md:flex-nowrap items-center justify-between">
        <div className="w-full max-w-3xl">
          <form action="#">
            <div className="flex flex-wrap sm:flex-nowrap md:flex-wrap lg:flex-nowrap gap-4">
              <Input
                type="text"
                placeholder="Enter your name"
                className="h-12 w-full"
              />
              <Input
                className="h-12 w-full"
                type="text"
                placeholder="Enter your email"
              />
            </div>
            <Input
              className="min-h-28 mt-4"
              type="textarea"
              placeholder="Enter your message"
            />
            <div className="mt-4 float-right">
              <Button>Send Now</Button>
            </div>
          </form>
        </div>

        <SocialLinks
          className="max-w-xl mx-auto px-8"
          iconSize="2xl"
          data={Data.contactLinks}
        />
      </div>
      <div className="w-full flex flex-wrap md:flex-nowrap items-center justify-center gap-4">
        <div className="text-lg flex gap-2">
          <FaLocationDot className="text-lime-500" />
          <p className="text-sm"> Shinkiari, P.O #21140 Mansehra, Pakistan</p>
        </div>
        <p className="hidden md:block">|</p>
        <a href="tel:+923405045889" className="text-lg flex gap-2">
          <IoCall className=" text-lime-500" />
          <p className="text-sm "> +92 340 5045 889</p>
        </a>
        <p className="hidden md:block">|</p>
        <a href="mailto:salikhanswati@gmail.com" className="text-lg flex gap-2">
          <IoMdMail className=" text-lime-500" />
          <p className="text-sm"> salikhanswati@gmail.com</p>
        </a>
      </div>
    </Container>
  );
};

export default Contact;
