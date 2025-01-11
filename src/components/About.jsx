import React from "react";
import CirclesDecorator from "../images/circles-decorator.png";
import Image from "../images/about.png";
import TitleDecorator from "./ui/Decorator";
import Button from "./ui/Button";

function About() {
  return (
    <section
      id="sobre"
      className="text-beigeLight font-sans py-16 px-12 flex flex-row gap-12 justify-center items-center tablet:py-0 mobile:flex-col mobile:mx-8 mobile:px-0 mobile:py-0"
    >
      <div className="tablet:hidden">
        <img src={CirclesDecorator} alt="Pequenos círculos azuis" />
      </div>

      <div className="max-w-[16.875rem]">
        <img
          src={Image}
          alt="Pessoas usando notebook"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-2">
        <TitleDecorator text="Sobre nós" />
        <h2 className="text-titles mb-4 mobile:text-3xl">Quem nós somos</h2>
        <p className="text-gray text-bodyText mb-4 w-[26rem] mobile:w-fit mobile:text-sm">
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
