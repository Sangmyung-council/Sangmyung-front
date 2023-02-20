import React from "react";
import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import Pledge from "../components/Pledge/Pledge";
import Footer from "../components/Footer/Footer";

import { useLocation } from "react-router-dom";

const PledgePage = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <Bio state={location.pathname.split("/")[1]} />
      <Pledge />
      <Footer />
    </>
  );
};

export default PledgePage;
