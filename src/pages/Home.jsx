import React from "react";
import Navbar from "../components/Navbar";
import Container from "./../components/Container";
import Footer from "./../components/Footer";
import Services from "./../components/Services";
import { ImWhatsapp } from "react-icons/im";

function Home() {
  return (
    <>
      <Navbar />
      <Container />
      <Services />
      <Footer />{" "}
      <a
        href="https://wa.me/9301024584"
        className="whatsapp-button absolute bottom-14 right-16"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ImWhatsapp className="fixed hover:animate-pulse " size={30} color="green" />
      </a>
    </>
  );
}

export default Home;
