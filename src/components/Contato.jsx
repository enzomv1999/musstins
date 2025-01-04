import React from "react";
import Button from "./ui/Button";
import background from "../images/contactBackground.png";
import logo from "../images/contactLogo.svg";

function Contato() {
  return (
    <section className="relative mx-4 mt-6 rounded-3xl">
      <div
        className="absolute inset-0 rounded-3xl bg-cover bg-no-repeat bg-center opacity-100"
        style={{
          backgroundImage: `url(${background})`,
        }}
      ></div>

      <div className="relative flex items-center justify-end right-56 top-24 text-beigeLight min-h-[400px] px-6">
        <div className="flex flex-col gap-10 rounded-3xl bg-backgroundServices p-8 max-w-lg text-left">
          <div className="mb-4">
            <span className="text-2xl font-bold">
              <img src={logo} alt="Logo" />
            </span>
          </div>

          <div className="flex flex-col gap-7">
            <h3 className="text-titlesLg font-serif">
              Pronto para transformar suas ideias em realidade? Vamos criar algo
              incrível <br /> juntos.
            </h3>
            <Button text="Contato"></Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contato;
