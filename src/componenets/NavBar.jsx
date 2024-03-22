import { useState } from "react";
import { FaBriefcase, FaHome, FaUser } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoGrid, IoOptions } from "react-icons/io5";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { PiStudentFill } from "react-icons/pi";
import { MdMessage } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

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
        } z-50 fixed top-4 right-4 text-3xl w-10 h-10 cursor-pointer `}
        onClick={toggleMenu}
      >
        {isMenuVisible ? <IoMdClose /> : <FiMenu />}
      </div>
      <nav
        id="header"
        className={`w-full h-full md:w-auto md:h-auto fixed p-2 z-40 top-1/2 right-0 md:right-4 ${
          isMenuVisible ? "flex" : "hidden"
        } md:flex flex-col items-start md:items-center justify-evenly -translate-y-1/2 md:rounded backdrop-blur-3xl bg-black/10 md:bg-zinc-800`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={`#${link.id}`}
            onClick={() => setMenuVisibility(false)}
            className={`group py-4 px-2 flex items-end md:justify-center active w-full md:bg-transparent hover:bg-lime-500 md:hover:bg-transparent text-white ${
              activeTab === link.id
                ? "md:text-lime-500 bg-lime-500"
                : "md:text-white bg-transparent"
            }`}
          >
            <span
              className={`relative text-lg transition-all ease-in duration-200 group-hover:md:text-lime-500`}
            >
              {<link.icon />}
            </span>
            <span className="md:absolute md:right-0 py-1 px-2 text-xs transition-all duration-300 rounded-full md:opacity-0 group-hover:opacity-100 group-hover:md:-translate-x-16">
              {link.name}
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
