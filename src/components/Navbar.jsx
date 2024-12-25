import React from "react";

function Navbar() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-[#0D0D0D] text-white">
      <div className="text-2xl font-bold">
        <img src="images/logoteste.png" alt="Logo" className="w-10 h-10 inline-block" />
      </div>

      {/* Menu */}
      <nav className="space-x-8 text-sm uppercase tracking-wider">
        <a href="#home" className="hover:text-gray-400 transition">Home</a>
        <a href="#sobre" className="hover:text-gray-400 transition">Sobre</a>
        <a href="#projetos" className="hover:text-gray-400 transition">Projetos</a>
        <a href="#servicos" className="hover:text-gray-400 transition">Serviços</a>
      </nav>
    </header>
  );
}

export default Navbar;
