import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import QuemSomos from "../components/QuemSomos";
import Projetos from "../components/Projetos";
import Metodologia from "../components/Metodologia";
import Rodape from "../components/Rodape";
import Contato from "../components/Contato";

function Home() {
  return (
    <div className="px-8 pb-16 pt-6 mx-52">
      <Header />
      <Main />
      <QuemSomos />
      <Projetos />
      <Metodologia />
      <Contato />
      <Rodape />
    </div>
  );
}

export default Home;
