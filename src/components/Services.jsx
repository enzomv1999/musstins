import React from "react";
import services from "../data/servicesItems";
import SubtitleDecorator from "./ui/Decorator";

function Services() {
  return (
    <section
      id="servicos"
      className="text-beigeLight bg-backgroundServices rounded-3xl font-sans mx-4 mt-16 flex flex-row justify-between"
    >
      <header className="flex flex-col gap-2 mt-32 ml-56">
        <SubtitleDecorator text="Serviços" />
        <h2 className="text-titles text-beigeLight">
          Metodologia de nosso <br /> trabalho
        </h2>
      </header>
      <aside className="grid grid-cols-2 gap-8 my-32 mr-48 w-[800px]">
        {services.map(({ icon, title, description }, i) => (
          <div key={i} className="flex flex-col gap-5 p-6">
            <img src={icon} alt={title} className="w-12 h-12" />
            <h3 className="font-serif text-titlesMd">{title}</h3>
            <p className="text-bodySm text-gray">{description}</p>
          </div>
        ))}
      </aside>
    </section>
  );
}

export default Services;
