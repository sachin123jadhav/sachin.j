'use client';
import ScrollToTop from "@/hooks/scroll-to-top";
import Header from "@/layout/headers/header";
import AboutArea from "../../../common/about-area";
import FeatureArea from "./feature-area";
import HeroSlider from "./hero-slider";
import PriceArea from "./price-area";
import ProjectArea from "./project-area";
import RankArea from "./rank-area";
import ServicesArea from "./services-area";
import TestimonialArea from "./testimonial-area";
import Footer from "@/layout/footers/footer";
import TopSlider from "./top-slider";

const HomeOne = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix">
            <HeroSlider />
            <TopSlider />
            <FeatureArea />
            <AboutArea />
            <ServicesArea />
            <ProjectArea />
            <TestimonialArea />
            <RankArea />
            <PriceArea />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </div>
    </>
  );
};

export default HomeOne;
