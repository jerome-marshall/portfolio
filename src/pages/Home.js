import React, { useState } from "react";
import SideBar from "../components/Sidebar/SideBar";
import NavBar from "../components/Navbar/NavBar";
import Hero from "../components/Hero/Hero";
import AboutSection from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Work from "../components/Work/Work";
import Contact from "../components/Contact/Contact";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle}></SideBar>
      <NavBar toggle={toggle}></NavBar>
      <Hero />
      <AboutSection />
      <Experience />
      <Work />
      <Contact />
    </>
  );
};

export default Home;
