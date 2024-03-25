import Container from "../componenets/Container";
import Heading from "../componenets/Heading";
import { Data } from "../Data";
import Button from "../componenets/Button";
import { FaArrowDown, FaArrowUp, FaSkype, FaWhatsapp } from "react-icons/fa";
import Card from "../componenets/Card";
import Modal from "../componenets/Model";
import { useState } from "react";
import { SiFreelancer, SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
import { IoMail } from "react-icons/io5";

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modelData, setModelData] = useState();
  const [activeTab, setActiveTab] = useState("Development");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Container full id="services" className="">
      <Heading text="I can" colorText="Do" />

      <div className="">
        <nav className="max-w-max mx-auto">
          {Data.servicesCategories.map((services) => (
            <button
              key={services.name}
              className={`py-2 px-4 rounded-t hover:text-lime-500 ${
                activeTab === services.name
                  ? "bg-zinc-900 text-lime-500"
                  : " text-zinc-500"
              }`}
              onClick={() => setActiveTab(services.name)}
            >
              {services.name}
            </button>
          ))}
        </nav>
      </div>
      {Data.servicesCategories.map((services) => (
        <div
          className={`max-w-max mx-auto bg-zinc-900 rounded ${
            activeTab === services.name ? "block" : "hidden"
          }`}
          key={services.name}
        >
          <h1 className="mx-auto p-4 text-xl border-b border-black">
            {services.details}
          </h1>
          <div className="flex justify-center flex-wrap gap-4 p-4">
            {services.services.map((service, index) => (
              <Card
                key={index}
                className="max-w-56 bg-black rounded"
                onClick={() => {
                  openModal();
                  setModelData(service);
                }}
                buttonText="View"
              >
                <div className="p-6">
                  <h3 className="text-xl">{service.name}</h3>
                  <p className="mt-4 text-zinc-500">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}
      <Modal isOpen={isOpen} onClose={closeModal} header={modelData?.name}>
        <p className="text-zinc-500">{modelData?.longDescription}</p>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <p className="mt-4 text-lg text-lime-500">Contact Me:</p>
            <div className="flex flex-wrap gap-2">
              <Button className="flex gap-2 items-center">
                <FaWhatsapp />
                <span>WhatsApp</span>
              </Button>
              <Button className="flex gap-2 items-center">
                <IoMail />
                <span>Mail</span>
              </Button>
              <Button className="flex gap-2 items-center">
                <FaSkype />
                <span>Skype</span>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <p className="mt-4 text-lg text-lime-500">Hire Me:</p>
            <div className="flex flex-wrap gap-2">
              <Button className="flex gap-2 items-center">
                <SiUpwork className="" />
                <span>Upwork</span>
              </Button>
              <Button className="flex gap-2 items-center">
                <TbBrandFiverr />
                <span>Fiverr</span>
              </Button>
              <Button className="flex gap-2 items-center">
                <SiFreelancer />
                <span>Freelancer</span>
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </Container>
  );
};

export default Services;
