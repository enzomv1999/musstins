import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import About from "../components/About";
import Projetos from "../components/Projetos";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Contato from "../components/Contato";

function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Main />
      {/* <About /> */}
      {/* <Projetos /> */}
      {/* <Services />
      <Contato />
      <Footer /> */}
    </div>
  );
}

export default Home;
