import { useState } from "react";
import { FaBriefcase, FaHome, FaUser } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoGrid, IoOptions } from "react-icons/io5";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { PiStudentFill } from "react-icons/pi";
import { MdMessage } from "react-icons/md";
import { IoMdClose, IoMdPricetags } from "react-icons/io";
import { VscFeedback } from "react-icons/vsc";

const NavBar = ({ activeTab }) => {
  const navLinks = [
    {
      name: "Home",
      id: "home",
      icon: FaHome,
    },
    {
      name: "Services",
      id: "services",
      icon: BsFillGrid3X3GapFill,
    },
    {
      name: "About",
      id: "about",
      icon: FaUser,
    },
    {
      name: "Projects",
      id: "projects",
      icon: IoGrid,
    },
    {
      name: "Experiences",
      id: "experiences",
      icon: FaBriefcase,
    },
    {
      name: "Skills",
      id: "skills",
      icon: IoOptions,
    },
    {
      name: "Educations",
      id: "educations",
      icon: PiStudentFill,
    },
    {
      name: "Pricing",
      id: "pricing",
      icon: IoMdPricetags,
    },
    {
      name: "Feedback",
      id: "feedback",
      icon: VscFeedback,
    },
    {
      name: "Contact",
      id: "contact",
      icon: MdMessage,
    },
  ];
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const toggleMenu = () => {
    setMenuVisibility(!isMenuVisible);
  };

  return (
    <div className="w-20 h-full float-end">
      <div
        id="menu-btn"
        className={`flex md:hidden items-center justify-center rounded-full ${
          isMenuVisible ? "border" : ""
        } z-50 fixed top-4 right-4 text-3xl w-8 h-8 cursor-pointer `}
        onClick={toggleMenu}
      >
        {isMenuVisible ? <IoMdClose /> : <FiMenu />}
      </div>
      <nav
        id="header"
        className={`w-full h-full md:w-auto md:h-auto fixed z-40 top-1/2 right-0 md:right-2 xl:right-4 ${
          isMenuVisible ? "flex" : "hidden"
        } md:flex flex-col items-start md:items-center justify-center -translate-y-1/2 md:rounded backdrop-blur-3xl bg-black/10 md:bg-zinc-800 overflow-auto md:overflow-visible`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={`#${link.id}`}
            onClick={() => setMenuVisibility(false)}
            className={`group py-2 px-3 flex md:justify-center items-center w-full md:bg-transparent hover:bg-zinc-800 md:hover:bg-transparent text-white ${
              activeTab === link.id
                ? "md:text-lime-500 bg-zinc-800"
                : "md:text-zinc-500 hover:text-white bg-transparent"
            }`}
          >
            <span
              className={`relative text-lg transition-all ease-in duration-200`}
            >
              {<link.icon />}
            </span>
            <span className="md:absolute md:right-0 py-1 px-2 text-xs transition-all duration-300 rounded-full md:opacity-0 group-hover:opacity-100 group-hover:md:-translate-x-12">
              {link.name}
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
