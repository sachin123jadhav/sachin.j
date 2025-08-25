"use client";
import HeaderThree from "@/layout/headers/header-3";
import TopSlider from "./top-slider";
import Footer from "@/layout/footers/footer";
import AboutMe from "./about-me";
import Experience from "./experience";
import ProjectArea from "./project-area";
import Project from "@/components/project";
import Portfolio from "./portfolio";
import MySkills from "./my-skills";


const HomeOne = () => {
  return (
    <>
      <HeaderThree />
      <TopSlider />
      <AboutMe />
      <Experience />
      <Portfolio />
      <MySkills />
  
      <Footer />
    </>
  );
};

export default HomeOne;
