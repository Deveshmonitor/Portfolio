import React from "react";
import Navbar from "../components/Navbar";
import Container from "./../components/Container";
import Footer from "./../components/Footer";
import Services from "./../components/Services";

function Home() {
  return (
    <>
      <Navbar />
      <Container />
      <Services />
      <Footer />
    </>
  );
}

export default Home;
