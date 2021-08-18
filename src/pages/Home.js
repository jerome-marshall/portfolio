import React, { useState } from "react";
import SideBar from "../components/Sidebar/SideBar";
import NavBar from "../components/Navbar/NavBar";
import Hero from "../components/Hero/Hero";
import AboutSection from "../components/About/About";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle}></SideBar>
      <NavBar toggle={toggle}></NavBar>
      <Hero></Hero>
      <AboutSection />
    </>
  );
};

export default Home;
