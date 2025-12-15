import React, { useState } from "react";
import RightArrow from "../../assets/icons/RightArrow";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../assets/images/logo.svg";

const navbarLinks = [
  { name: "Home", href: "#" },
  { name: "Chat", href: "#" },
  { name: "Voice", href: "#" },
  { name: "Special Messages", href: "#" },
  { name: "Vault", href: "#" },
  { name: "Family", href: "#" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const openModal = () => {
    setOpen(true);
    setTimeout(() => setVisible(true), 10);
  };

  const closeModal = () => {
    setVisible(false);
    setTimeout(() => setOpen(false), 300);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-primary">
        <div className="hidden md:flex items-center gap-6 lg:gap-10.5 h-17.5 justify-center lg:justify-end px-7.25">
          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-5 lg:space-x-12">
            {navbarLinks.map((link) => (
              <li
                key={link.name}
                className="text-lg lg:text-[20px] hover:text-secondary cursor-pointer font-jost text-white leading-12"
              >
                {link.name}
              </li>
            ))}
          </ul>

          {/* Desktop Button */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10.5">
            <button className=" md:flex items-center cursor-pointer text-white font-jost gap-2.5 bg-transparent px-4 py-1 rounded-[3px] border-2 border-white">
              Login/Register
            </button>
            <RightArrow fill="#FFFFFF" />
          </div>
        </div>
        {/* Mobile User Icon */}
        <div className="md:hidden flex w-full  px-3 py-5">
          <div className="bg-white w-full rounded-full px-5 pt-3 pb-3 flex items-center justify-between">
            <a
              href="/"
              className="text-[#F9B13A] tracking-[0.248px] font-normal leading-[170%] text-[24.821px] font-marcellus flex items-center gap-2.5"
            >
              <img src={logo} alt="" className="-mt-1" />
              StillHere
            </a>
            <button onClick={openModal}>
              <RxHamburgerMenu size={32} color="#295D72" />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MODAL */}
      {open && (
        <div
          className={`fixed inset-0 z-50 flex justify-center items-start transition-opacity duration-300
            ${visible ? "bg-black/40 opacity-100" : "opacity-0"}`}
        >
          <div
            className={`bg-white w-[90%] max-w-sm rounded-[10px] mt-10 p-6 relative
              transform transition-all duration-300 ease-out
              ${
                visible
                  ? "translate-y-0 scale-100 opacity-100"
                  : "-translate-y-6 scale-95 opacity-0"
              }`}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-2xl text-primary"
              onClick={closeModal}
            >
              ✕
            </button>

            {/* Menu Items */}
            <ul className="space-y-4 mt-6">
              {navbarLinks.map((item) => (
                <li key={item.name}>
                  <a className="font-jost text-[16px] text-primary">
                    {item.name}
                  </a>
                  <div className="w-full h-px bg-gray-300 mt-3" />
                </li>
              ))}
            </ul>

            {/* Login Button */}
            <button className="mt-6 bg-secondary text-white text-xs px-6 py-3 rounded-md font-jost flex items-center gap-2">
              Login/Register <span>›</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
