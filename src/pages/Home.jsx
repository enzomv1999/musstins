import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import About from "../components/About";
import Projetos from "../components/Projetos";
import Services from "../components/Services";
import Rodape from "../components/Rodape";
import Contato from "../components/Contato";

function Home() {
  return (
    <>
      <Header />
      <Main />
      <About />
      {/* <Projetos /> */}
      <Services />
      <Contato />
      <Rodape />
    </>
  );
}

export default Home;
