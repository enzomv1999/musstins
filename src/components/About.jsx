import React from "react";
import CirclesDecorator from "../images/circles-decorator.png";
import Image from "../images/about.png";
import TitleDecorator from "./ui/Decorator";
import Button from "./ui/Button";

function About() {
  return (
    <section
      id="sobre"
      className="text-beigeLight font-sans py-16 px-12 flex flex-row gap-12 justify-center items-center"
    >
      {/* Decorator */}
      <div className="">
        <img src={CirclesDecorator} alt="Pequenos círculos azuis" />
      </div>

      {/* Imagem */}
      <div className="">
        <img
          src={Image}
          alt="Pessoas usando notebook"
          className="object-cover"
        />
      </div>

      {/* Texto */}
      <div className="flex flex-col gap-2">
        <TitleDecorator text="Sobre nós" />
        <h2 className="text-titles mb-4">Quem nós somos</h2>
        <p className="text-gray text-bodyText mb-4 w-[26rem]">
          Unimos inovação e sofisticação para criar soluções tecnológicas de
          alto desempenho. Somos movidos pela paixão de transformar ideias em
          realidades, proporcionando crescimento e conhecimento para clientes
          através de experiências digitais únicas.
        </p>
        <Button text="Saiba mais" />
      </div>
    </section>
  );
}

export default About;
