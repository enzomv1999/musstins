import React from "react";

function Hero() {
  return (
    <section
      id="home"
      className="bg-[#0D0D0D] text-white py-16 px-8 flex flex-col md:flex-row items-start md:items-center"
    >
      {/* Esquerda: Título e texto */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          MUSSTINS <span className="block">TECH</span>
        </h1>
        <p className="text-gray-300 max-w-lg">
          Moldando o futuro com tecnologia inovadora, design sofisticado e soluções flexíveis.
        </p>
      </div>

      {/* Direita: Imagens “recortadas” */}
      <div className="w-full md:w-1/2 flex justify-center items-center gap-2 md:gap-4">
        <div
          className="w-1/3 h-52 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/fachada1.jpg')" }}
        />
        <div
          className="w-1/3 h-52 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/fachada2.jpg')" }}
        />
        <div
          className="w-1/3 h-52 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/fachada3.jpg')" }}
        />
      </div>
    </section>
  );
}

export default Hero;
