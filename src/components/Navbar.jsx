import React from "react";

function Navbar() {
  return (
    <header className="flex items-center px-8 py-4 bg-[#0D0D0D] text-white">
      {/* Esquerda (menu) */}
      <div className="flex-1">
        <nav className="space-x-8 text-sm uppercase tracking-wider">
          <a href="#home" className="hover:text-gray-400 transition">Home</a>
          <a href="#sobre" className="hover:text-gray-400 transition">Sobre</a>
        </nav>
      </div>

      {/* Centro (logo) */}
      <div className="flex-1 flex justify-center">
        <img
          src="/images/logoteste.png"
          alt="Logo"
          className="w-10 h-10 inline-block"
        />
      </div>

      {/* Direita (menu) */}
      <div className="flex-1 flex justify-end">
        <nav className="space-x-8 text-sm uppercase tracking-wider">
          <a href="#projetos" className="hover:text-gray-400 transition">Projetos</a>
          <a href="#servicos" className="hover:text-gray-400 transition">Serviços</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
