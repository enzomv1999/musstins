import React from "react";
import musstinsLogo from "../images/footerLogo.svg";
import facebookLogo from "../images/facebook.svg";
import instagramLogo from "../images/instagram.svg";
import linkedinLogo from "../images/linkedin.svg";
import emailLogo from "../images/email.svg";

function Footer() {
  return (
    <footer className="font-sans text-beigeLight pt-28 pb-20">
      <div className=" mx-52 flex flex-row justify-between">
        <div className="flex flex-col gap-7 mb-4">
          <img
            src={musstinsLogo}
            alt="Logo"
            className="max-w-fit pointer-events-none"
          />
          <p className="text-bodyLg text-gray">
            Copyright © 2025 Musstins. <br /> Todos os direitos reservados.
          </p>
          <div className="flex flex-row items-center space-x-4 mt-2 text-bodyLg">
            <h3>Nos siga:</h3>
            <a href="/">
              <img src={facebookLogo} alt="Facebook" />
            </a>
            <a href="/">
              <img src={instagramLogo} alt="Instagram" />
            </a>
            <a href="/">
              <img src={linkedinLogo} alt="Linkedin" />
            </a>
            <a href="/">
              <img src={emailLogo} alt="Email" />
            </a>
          </div>
        </div>

        <div className="flex space-x-28 font-serif text-titlesSm">
          <nav className="flex flex-col space-y-8">
            <a href="/">Sobre</a>
            <a href="/">Projetos</a>
            <a href="/">Serviços</a>
          </nav>
          <nav className="flex flex-col space-y-8">
            <a href="/">Termos de Serviço</a>
            <a href="/">Política de Privacidade</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
