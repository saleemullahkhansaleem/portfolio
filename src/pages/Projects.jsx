import Container from "../componenets/Container";
import Heading from "../componenets/Heading";
import { FaGithub } from "react-icons/fa";
import { Data } from "../Data";
import Modal from "../componenets/Model";
import { useState } from "react";
import Button from "../componenets/Button";
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
      <div>
        <div className="flex flex-wrap justify-center gap-4 mx-auto max-w-4xl">
          {Data.projects.map((project, index) => (
            <Card
              key={index}
              buttonText="View"
              className="max-w-72 w-72"
              onClick={() => {
                setProject(project);
                openModal();
              }}
            >
              <img
                className="scale-100 group-hover/card:scale-105 ease-in duration-300"
                src={project.image}
                alt={project.name}
              />
              <div className="absolute bg-black/50 bottom-0 backdrop-blur p-2 w-full transition ease-in-out duration-500">
                {/* <h3 className="">{project.name}</h3> */}
                <p className="text-xs">{project.tagline}</p>
              </div>
            </Card>
          ))}
          {/* <div className="project-container"></div> */}
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} header={project?.name}>
        {project && (
          <div>
            <div className="relative">
              <div className="flex flex-wrap justify-between items-center sticky right-0 top-0 p-2 w-full backdrop-blur-sm bg-black/30">
                <p className="px-2 text-zinc-500 uppercase">
                  {project.tagline}
                </p>
                <div className="flex gap-2 flex-wrap">
                  <Button
                    className="flex gap-2 items-center"
                    href={project?.url}
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
              </div>
              <img
                className="w-full"
                src={project?.imageFull}
                alt={project?.title}
              />
            </div>
            <p className="mt-2 text-white py-2">Description: </p>
            <p className="text-zinc-500">{project?.description}</p>
            <p className="mt-2 text-white py-2">Technologies used: </p>
            <div className="flex gap-2 flex-wrap">
              {project?.usedTools?.map((tool, index) => (
                <span
                  key={index}
                  className="bg-zinc-800 text-white rounded py-1 px-4 flex gap-2 items-center"
                >
                  {<tool.icon className={``} />} <span>{tool?.name}</span>
                </span>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </Container>
  );
};

export default Projects;
