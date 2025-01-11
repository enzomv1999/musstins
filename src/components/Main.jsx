import React from "react";
import Typewriter from "typewriter-effect";

import Cards from "./Cards";
import firstCard from "../images/card-1.png";
import secondCard from "../images/card-2.png";
import thirdCard from "../images/card-3.png";

const Trace = () => {
  return (
    <span className="block bg-beigeLight w-trace h-trace mobile:w-shortTrace"></span>
  );
};

function Main() {
  return (
    <section
      id="home"
      className="text-beigeLight px-8 pb-16 pt-6 mx-52 flex flex-row font-sans items-start tablet:px-0 tablet:pt-0 tablet:mx-8 mobile:p-8"
    >
      <header className="w-full mb-8 mt-48 tablet:mt-5">
        <aside>
          <h1 className="text-mainTitle mb-6 mobile:text-5xl">
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
        <p className="text-gray text-bodyText max-w-lg mobile:text-bodySm">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  `Moldando o futuro com tecnologia inovadora, design sofisticado
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

      <div className="w-full flex justify-end items-start gap-6 tablet:hidden">
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
