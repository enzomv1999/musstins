import React from "react";

function QuemSomos() {
  return (
    <section
      id="sobre"
      className="bg-[#0D0D0D] text-white py-16 px-8 md:flex md:flex-row md:justify-between items-center"
    >
      {/* Imagem */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 relative">
        <img
          src="/images/people-laptop.jpg"
          alt="Pessoas usando notebook"
          className="rounded-lg object-cover"
        />
        {/* Você pode adicionar algum elemento decorativo (bolinhas, shape) via CSS ou outro <div> */}
      </div>

      {/* Texto */}
      <div className="w-full md:w-1/2 md:pl-8">
        <h2 className="text-3xl font-bold mb-4">Quem nós somos</h2>
        <p className="text-gray-300 mb-4">
          Unimos inovação e sofisticação para criar soluções tecnológicas de alto desempenho.
          Somos movidos pela paixão de transformar ideias em realidades,
          proporcionando crescimento e conhecimento para clientes
          através de experiências digitais únicas.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded">
          Saiba mais
        </button>
      </div>
    </section>
  );
}

export default QuemSomos;
