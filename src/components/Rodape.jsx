import React from "react";

function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-gray-400 py-8 px-8 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
        {/* Esquerda */}
        <div className="mb-4 md:mb-0">
          <h4 className="text-white font-bold text-lg">Musstins</h4>
          <p>Copyright © 2025 Musstins. Todos os direitos reservados.</p>
          <div className="flex space-x-4 mt-2">
            {/* Ícones de redes sociais */}
            <a href="#facebook" className="hover:text-white">FB</a>
            <a href="#instagram" className="hover:text-white">IG</a>
            <a href="#linkedin" className="hover:text-white">IN</a>
          </div>
        </div>

        {/* Direita: links */}
        <div className="flex space-x-8">
          <div className="flex flex-col space-y-1">
            <a href="#sobre" className="hover:text-white">Sobre</a>
            <a href="#projetos" className="hover:text-white">Projetos</a>
            <a href="#servicos" className="hover:text-white">Serviços</a>
          </div>
          <div className="flex flex-col space-y-1">
            <a href="#termos" className="hover:text-white">Termos de Serviço</a>
            <a href="#politica" className="hover:text-white">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
