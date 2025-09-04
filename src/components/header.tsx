import React from "react";
import Logo from "../assets/m.png";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDropdown = () => setOpen(!open);

  return (
    <div className="fixed w-full bg-gray-900 border-b border-gray-600 z-50">
      <div className="p-4 px-6 flex justify-between items-center">
        <img src={Logo} alt="Logo" className="w-10 h-10" />

        {/* Desktop Nav */}
        <div className="md:flex cursor-pointer justify-between items-center text-white gap-6 font-semibold hidden">
          <div className="hover:bg-gray-600/50 rounded-xl p-2 duration-200 ">
            <a href="#hero">Home</a>
          </div>
          <div className="hover:bg-gray-600/50 rounded-xl p-2 duration-200">
            <a href="#about">About Me</a>
          </div>
          <div className="hover:bg-gray-600/50 rounded-xl p-2 duration-200">
            <a href="#skill">Skills</a>
          </div>
          <div className="hover:bg-gray-600/50 rounded-xl p-2 duration-200">
            <a href="#project">Projects</a>
          </div>
          <div className="hover:bg-gray-600/50 rounded-xl p-2 duration-200">
            <a href="#contact">Contact</a>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <button onClick={toggleDropdown} className="md:hidden text-white">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-gray-900 px-6 ${
          open ? "max-h-96 pb-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-4 text-white font-semibold">
          <div>Home</div>
          <div>About Me</div>
          <div>Projects</div>
          <div>Skills</div>
          <div>Contact</div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
