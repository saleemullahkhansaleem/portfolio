import Container from "../componenets/Container";
import Heading from "../componenets/Heading";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { Data } from "../Data";
import Modal from "../componenets/Model";
import { useState } from "react";
import Button from "../componenets/Button";
import ButtonGo from "../componenets/ButtonGo";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import Card from "../componenets/Card";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [project, setProject] = useState();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Container
      full
      id="projects"
      className="flex flex-wrap justify-evenly gap-4 items-center"
    >
      <Heading text="My" colorText="Projects" />
      <div className="flex flex-wrap justify-center md:flex-nowrap gap-4 mx-auto max-w-4xl lg:max-h-[450px] overflow-y-hidden">
        <div className="h-full flex flex-col gap-4">
          <Card
            buttonText="View"
            className="min-w-60"
            onClick={() => {
              setProject({
                img: "project1.png",
                title: "Project One",
                description:
                  "This is the project description for the project with the project description",
              });
              openModal();
            }}
          >
            <img
              className="scale-100 group-hover/card:scale-110 ease-in duration-300"
              src="project1.png"
              alt="project"
            />
          </Card>
          <Card
            buttonText="View"
            className=""
            onClick={() => {
              setProject({
                img: "project-2.png",
                title: "Project Two",
                description:
                  "This is the project description for the project with the project description",
              });
              openModal();
            }}
          >
            <img
              className="scale-100 group-hover/card:scale-110 ease-in duration-300"
              src="project-2.png"
              alt="project"
            />
          </Card>
        </div>

        <div className="h-full">
          <Card
            buttonText="View"
            className="min-w-60"
            onClick={() => {
              setProject({
                img: "project3.png",
                title: "Project Three",
                description:
                  "This is the project description for the project with the project description",
              });
              openModal();
            }}
          >
            <img
              className="scale-100 group-hover/card:scale-110 ease-in duration-300"
              src="project3.png"
              alt="project"
            />
          </Card>
        </div>
        <div className="h-full flex flex-col gap-4">
          <Card
            buttonText="View"
            className="h-1/2"
            onClick={() => {
              setProject({
                img: "project-9.webp",
                title: "Vida Mates",
                description:
                  "This is the project description for the project with the project description",
              });
              openModal();
            }}
          >
            <img
              className="scale-100 group-hover/card:scale-110 ease-in duration-300"
              src="project-9.webp"
              alt="project"
            />
          </Card>
          <div className="flex gap-4">
            <div className="w-full flex flex-col gap-4">
              <Card
                buttonText="View"
                className=""
                onClick={() => {
                  setProject(project);
                  openModal();
                }}
              >
                <img
                  className="scale-100 group-hover/card:scale-110 ease-in duration-300"
                  src="project1.png"
                  alt="project"
                />
              </Card>
              <Card
                buttonText="View"
                className=""
                onClick={() => {
                  setProject(project);
                  openModal();
                }}
              >
                <img
                  className="scale-100 group-hover/card:scale-110 ease-in duration-300"
                  src="project-2.png"
                  alt="project"
                />
              </Card>
            </div>
            <Card
              buttonText="View"
              className="max-w-sm"
              onClick={() => {
                setProject(project);
                openModal();
              }}
            >
              <img
                className="scale-100 group-hover/card:scale-110 ease-in duration-300"
                src="project3.png"
                alt="project"
              />
            </Card>
          </div>
        </div>
        {/* {Data.projects.map((project, index) => (
          <Card
            key={index}
            buttonText="View"
            className="max-w-sm"
            onClick={() => {
              setProject(project);
              openModal();
            }}
          >
            <img
              className="scale-100 group-hover/card:scale-110 ease-in duration-300"
              src={project.image}
              alt={project.name}
            />
            <div className="absolute bg-black/30 bottom-0 backdrop-blur p-4 text-center w-full transition ease-in-out duration-500">
              <h3 className="text-2xl">{project.name}</h3>
              <p>{project.discription}</p>
            </div>
          </Card>
        ))} */}
        <div className="project-container"></div>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} header={project?.title}>
        {project && (
          <div>
            <div className="relative">
              <div className="flex gap-2 flex-wrap justify-end sticky right-0 top-0 p-2 w-full backdrop-blur-sm bg-black/30">
                <Button
                  className="flex gap-2 items-center"
                  onClick={closeModal}
                >
                  <BsFillGrid1X2Fill /> <span>View Live</span>
                </Button>
                <Button
                  fill
                  className="flex gap-2 items-center"
                  onClick={closeModal}
                >
                  <FaGithub /> <span>View Code</span>
                </Button>
              </div>
              <img className="w-full" src={project?.img} alt={project?.title} />
            </div>
            <p className="mt-2 text-zinc-500">{project?.description}</p>
          </div>
        )}
      </Modal>
    </Container>
  );
};

export default Projects;
