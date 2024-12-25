import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import QuemSomos from "../components/QuemSomos";
import Projetos from "../components/Projetos";
import Metodologia from "../components/Metodologia";
import Rodape from "../components/Rodape";
import Contato from "../components/Contato";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <QuemSomos />
      <Projetos />
      <Metodologia />
      <Contato />
      <Rodape />
    </>
  );
}

export default Home;
