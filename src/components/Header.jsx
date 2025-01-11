import React, { useEffect, useState } from "react";
import Logo from "../images/logo.svg";
import fullLogo from "../images/footerLogo.svg";
import { X, Menu } from "lucide-react";

function Header() {
  const mobileWidth = window.innerWidth <= 390;
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(mobileWidth);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 390);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <header className="flex items-center justify-between text-beigeLight px-8 pb-16 pt-6 mx-52 font-sans text-lg uppercase tablet:mx-8 tablet:px-0">
      <div className="flex space-x-16 tablet:text-bodyLg tracking-wider tablet:space-x-8 mobile:hidden">
        <a href="#home">Home</a>
        <a href="#sobre">Sobre</a>
      </div>

      <div>
        <a href="./">
          <img
            src={`${isMobile ? fullLogo : Logo}`}
            alt="Logo"
            className="mobile:w-40"
          />
        </a>
      </div>

      <div className="flex space-x-16 tablet:text-bodyLg tracking-wider tablet:space-x-8 mobile:hidden">
        <a href="#projetos">Projetos</a>
        <a href="#servicos">Serviços</a>
      </div>

      <button
        onClick={toggleMenu}
        className={`absolute right-8 ${isMobile ? "block" : "hidden"} `}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <div
        className={`fixed top-0 z-20 right-0 h-full w-full bg-backgroundServices transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <header className="flex justify-between items-center p-6 border-b border-beigeLight">
          <div>
            <img src={fullLogo} alt="Logo" className="w-28 h-14" />
          </div>
          <button onClick={toggleMenu}>
            <X size={28} />
          </button>
        </header>

        <nav className="flex flex-col space-y-10 px-6 py-10 text-titlesSm text-beigeLight font-sans">
          <a href="#home" onClick={toggleMenu}>
            Home
          </a>
          <a href="#sobre" onClick={toggleMenu}>
            Sobre
          </a>
          <a href="#projetos" onClick={toggleMenu}>
            Projetos
          </a>
          <a href="#servicos" onClick={toggleMenu}>
            Serviços
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
