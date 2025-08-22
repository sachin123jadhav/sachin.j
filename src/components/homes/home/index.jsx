"use client";
import FooterThree from "@/layout/footers/footer-3";
import HeaderThree from "@/layout/headers/header-3";
import TopSlider from "./top-slider";
import Footer from "@/layout/footers/footer";
import AboutMe from "./about-me";
import Experience from "./experience";


const HomeOne = () => {
  return (
    <>
      <HeaderThree />
      <TopSlider />
      <AboutMe />
      <Experience />
  
      <Footer />
    </>
  );
};

export default HomeOne;
