import React, { useState } from "react";
import SideBar from "../components/Sidebar/SideBar";
import NavBar from "../components/Navbar/NavBar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle}></SideBar>
      <NavBar toggle={toggle}></NavBar>
    </>
  );
};

export default Home;
