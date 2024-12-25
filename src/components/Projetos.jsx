import React from "react";

function Projetos() {
  // Exemplo de lista de projetos
  const projetos = [
    {
      nome: "Nome projeto",
      descricao: "UI/UX Design, SaaS",
      imagem: "/images/projeto1.jpg",
    },
    {
      nome: "Projeto 2",
      descricao: "Website, E-commerce",
      imagem: "/images/projeto2.jpg",
    },
    // ... etc.
  ];

  return (
    <section
      id="projetos"
      className="bg-[#0D0D0D] text-white py-16 px-8"
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Explore os nossos trabalhos & projetos</h2>
        <button className="text-blue-400 hover:underline">Ver mais →</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projetos.map((proj, index) => (
          <div
            key={index}
            className="relative group bg-black rounded-lg overflow-hidden"
          >
            <img
              src={proj.imagem}
              alt={proj.nome}
              className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">{proj.nome}</h3>
              <p className="text-gray-300">{proj.descricao}</p>
            </div>
            {/* Ícone de seta */}
            <div className="absolute top-4 right-4 bg-gray-800 rounded-full p-2 group-hover:bg-blue-600 transition">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projetos;
