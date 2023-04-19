import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import MinuteDetail from "../components/Detail/MinuteDetail";
import Footer from "../components/Footer/Footer";

import { useLocation } from "react-router-dom";

const MinuteDetailPage = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <Bio state={location.pathname.split("/")[1]} />
      <MinuteDetail />
      <Footer />
    </>
  );
};

export default MinuteDetailPage;