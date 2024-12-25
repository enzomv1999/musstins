import React from "react";

function Metodologia() {
  const servicos = [
    {
      titulo: "Desenvolvimento de Software",
      descricao: "Criação de aplicações web e mobile sob demanda...",
      icon: "/images/icon-dev.png",
    },
    {
      titulo: "Outsourcing de TI",
      descricao: "Alocação de desenvolvedores profissionais de TI...",
      icon: "/images/icon-ti.png",
    },
  ];

  return (
    <section
      id="servicos"
      className="bg-[#0D0D0D] text-white py-16 px-8"
    >
      <h2 className="text-3xl font-bold mb-8">Metodologia de nosso trabalho</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicos.map((item, i) => (
          <div key={i} className="bg-[#111111] rounded-lg p-6">
            <img src={item.icon} alt={item.titulo} className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{item.titulo}</h3>
            <p className="text-gray-300 text-sm">{item.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Metodologia;
