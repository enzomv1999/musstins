import React from "react";
import Typewriter from "typewriter-effect";

import Cards from "./Cards";
import firstCard from "../images/card-1.png";
import secondCard from "../images/card-2.png";
import thirdCard from "../images/card-3.png";

const Trace = () => {
  return <span className="block bg-beigeLight w-trace h-trace"></span>;
};

function Main() {
  return (
    <section
      id="home"
      className="text-beigeLight my-16 flex flex-col font-sans md:flex-row items-start md:items-center"
    >
      <header className="w-full md:w-1/2 mb-8 mt-48 md:mb-0">
        <aside>
          <h1 className="text-title mb-6">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("MUSSTINS").start();
              }}
              options={{
                cursor: "",
              }}
            />
            <div className="flex items-center gap-6">
              <Trace />
              <span className="block">
                {" "}
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString("TECH").start();
                  }}
                  options={{
                    cursor: "|",
                    delay: 525,
                  }}
                />
              </span>
            </div>
          </h1>
        </aside>
        <p className="text-gray max-w-lg">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  `Moldando o futuro com tecnologia inovadora, design <br /> sofisticado
                  e soluções flexíveis.`
                )
                .start();
            }}
            options={{
              cursor: "",
              delay: 40,
            }}
          />
        </p>
      </header>

      <div className="w-full flex justify-end items-start gap-6">
        <Cards
          src={firstCard}
          alt="Card com design inovador de vidraças e sem saturação"
        />

        <Cards
          src={secondCard}
          alt="Card com design inovador de vidraças e sem saturação"
        />

        <Cards
          src={thirdCard}
          alt="Card com design inovador de vidraças e sem saturação"
        />
      </div>
    </section>
  );
}

export default Main;
