import React from "react";
import Logo from "../images/logo.svg";

function Header() {
  return (
    <header className="flex items-center justify-between text-beigeLight px-8 pb-16 pt-6 mx-52 font-sans text-lg uppercase">
      <div>
        <nav className="space-x-16 tablet:text-md tracking-wider">
          <a href="#home">Home</a>
          <a href="#sobre">Sobre</a>
        </nav>
      </div>

      <div>
        <a href="./">
          <img src={Logo} alt="Logo" className="tablet:w-9 tablet:h-9" />
        </a>
      </div>

      <div>
        <nav className="space-x-16 tablet:text-md tracking-wider">
          <a href="#projetos">Projetos</a>
          <a href="#servicos">Serviços</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
