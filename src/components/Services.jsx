import React from "react";
import services from "../data/servicesItems";
import SubtitleDecorator from "./ui/Decorator";

function Services() {
  return (
    <section
      id="servicos"
      className="text-beigeLight bg-backgroundServices rounded-3xl font-sans mx-4 mt-16 flex flex-row justify-between tablet:flex-col mobile:bg-transparent mobile:mx-0"
    >
      <header className="flex flex-col gap-2 mt-32 ml-56 tablet:ml-12 tablet:mt-16 mobile:!ml-8 mobile:!mt-8">
        <SubtitleDecorator text="Serviços" />
        <h2 className="text-titles text-beigeLight mobile:text-3xl">
          Metodologia de nosso <br /> trabalho
        </h2>
      </header>
      <aside className="grid grid-cols-2 gap-8 my-32 mr-48 w-[800px] tablet:mr-6 tablet:my-16 tablet:w-[700px] tablet:ml-6 mobile:!ml-3 mobile:!w-[340px] mobile:grid-cols-1 mobile:!my-4">
        {services.map(({ icon, title, description }, i) => (
          <div key={i} className="flex flex-col gap-5 p-6">
            <img
              src={icon}
              alt={title}
              className="w-12 h-12 mobile:w-10 mobile:h-10"
            />
            <h3 className="font-serif text-titlesMd">{title}</h3>
            <p className="text-bodySm text-gray">{description}</p>
          </div>
        ))}
      </aside>
    </section>
  );
}

export default Services;
