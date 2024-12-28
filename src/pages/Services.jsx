import Container from "../componenets/Container";
import Heading from "../componenets/Heading";
import { Data } from "../Data";
import Button from "../componenets/Button";
import { FaSkype, FaWhatsapp } from "react-icons/fa";
import Card from "../componenets/Card";
import Modal from "../componenets/Modal";
import { useState } from "react";
import { SiFreelancer, SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
import { IoMail } from "react-icons/io5";

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modelData, setModelData] = useState();
  const [activeTab, setActiveTab] = useState("All");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const allServices = Data.servicesCategories.flatMap(
    (category) => category.services
  );

  return (
    <Container full id="services" className="">
      <Heading
        title="What I Can Do for You"
        text="Offering Expertise in"
        colorText="Multiple Domains"
      />
      <p className="text-center max-w-2xl mx-auto text-zinc-400 mb-8 px-4">
        I offer versatile skills to bring your ideas to life, from web
        development to branding and creative solutions, delivering results
        tailored to your needs.
      </p>

      <div className="">
        <nav className="max-w-max mx-auto flex">
          {/* Add "All" tab */}
          <button
            title="All"
            aria-label="All"
            className={`py-2 px-4 rounded-t flex items-center gap-2 ${
              activeTab === "All"
                ? "bg-zinc-900 text-lime-500 hover:text-lime-500"
                : "text-zinc-500 hover:text-white"
            }`}
            onClick={() => setActiveTab("All")}
          >
            <span className="hidden sm:block">All</span>
          </button>
          {Data.servicesCategories.map((services) => (
            <button
              title={services?.name}
              aria-label={services?.name}
              key={services.name}
              className={`py-2 px-4 rounded-t flex items-center gap-2 ${
                activeTab === services.name
                  ? "bg-zinc-900 text-lime-500 hover:text-lime-500"
                  : "text-zinc-500 hover:text-white"
              }`}
              onClick={() => setActiveTab(services.name)}
            >
              {<services.icon className="text-2xl" />}{" "}
              <span className="hidden sm:block">{services.name}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="max-w-max mx-auto bg-zinc-900 rounded">
        {/* Render all services if "All" tab is active */}
        {activeTab === "All" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
            {allServices.map((service, index) => (
              <Card
                title="View detail"
                key={index}
                className="sm:max-w-80 bg-black rounded"
                onClick={() => {
                  openModal();
                  setModelData(service);
                }}
                buttonText="View"
              >
                <div className="p-6">
                  <h3 className="">{service.name}</h3>
                  <p className="my-2 text-zinc-500">{service.description}</p>
                  <button className="bg-zinc-800 text-zinc-500 rounded py-1 px-4 text-sm mt-2">
                    Show details
                  </button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Render services by category */}
        {Data.servicesCategories.map((services) => (
          <div
            className={`${
              activeTab === services.name ? "block" : "hidden"
            } max-w-max mx-auto bg-zinc-900 rounded`}
            key={services.name}
          >
            <h2 className="mx-auto p-4 text-xl border-b border-black text-zinc-500">
              {services.details}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              {services.services.map((service, index) => (
                <Card
                  title="View detail"
                  key={index}
                  className="sm:max-w-80 bg-black rounded"
                  onClick={() => {
                    openModal();
                    setModelData(service);
                  }}
                  buttonText="View"
                >
                  <div className="p-6">
                    <h3 className="">{service.name}</h3>
                    <p className="my-2 text-zinc-500">{service.description}</p>
                    <button className="bg-zinc-800 text-zinc-500 rounded py-1 px-4 text-sm mt-2">
                      Show details
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={isOpen} onClose={closeModal} header={modelData?.name}>
        <p className="text-zinc-500">{modelData?.longDescription}</p>
        {/* Display unique features */}
        <div className="mt-4">
          <h4 className="font-semibold text-zinc-300 mb-2">Unique Features:</h4>
          <ul className="list-disc pl-5 text-zinc-500">
            {modelData?.uniqueFeatures?.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Display technologies */}
        <div className="mt-4">
          <h4 className="font-semibold text-zinc-300 mb-2">Technologies:</h4>
          <div className="flex gap-2 mt-2">
            {modelData?.technologies?.map((tech, techIdx) => (
              <span
                key={techIdx}
                className="bg-zinc-800 text-zinc-500 rounded-full py-1 px-4 flex gap-2 items-center text-sm"
              >
                {<tech.icon className={``} />} <span>{tech?.name}</span>
              </span>
            ))}
          </div>
        </div>
        <hr className="mt-6 border-zinc-800" />
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <p className="mt-4 text-lg text-lime-500">Contact Me:</p>
            <div className="flex flex-wrap gap-2">
              <Button
                target="_blank"
                href="https://wa.me/+923405045889"
                className="flex gap-2 items-center"
              >
                <FaWhatsapp />
                <span>WhatsApp</span>
              </Button>
              <Button
                target="_blank"
                href="mailto:salikhanswati@gmail.com"
                className="flex gap-2 items-center"
              >
                <IoMail />
                <span>Mail</span>
              </Button>
              <Button
                target="_blank"
                href="https://join.skype.com/invite/pXBYBspa6eUI"
                className="flex gap-2 items-center"
              >
                <FaSkype />
                <span>Skype</span>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <p className="mt-4 text-lg text-lime-500">Hire Me:</p>
            <div className="flex flex-wrap gap-2">
              <Button
                target="_blank"
                href="https://www.upwork.com/freelancers/~0181decb984c651d39"
                className="flex gap-2 items-center"
              >
                <SiUpwork className="" />
                <span>Upwork</span>
              </Button>
              <Button
                target="_blank"
                href="https://fiverr.com/saliyousafzai"
                className="flex gap-2 items-center"
              >
                <TbBrandFiverr />
                <span>Fiverr</span>
              </Button>
              <Button
                target="_blank"
                href="https://www.freelancer.com/u/saleemyousafzai"
                className="flex gap-2 items-center"
              >
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
