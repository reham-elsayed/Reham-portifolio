import React from 'react'
import AnimatedClipContainer from "../Components/AnimatedClipContainer/AnimatedClipContainer";
import DividerSlider from "../Components/DividerSlider/DividerSlider";
import Footer from "../Components/Footer/Footer";
import ProjectSliderWrapper from "../Components/ProjectsSliderComponent/ProjectSliderWrapper";
import { FloatingWhatsAppAvatar } from "../Components/FloatingWhatsappAvatar/FloatingWhatsappAvater";
import AboutDeveloperCard from "../Components/AboutDeveloperCard/AboutDeveloperCard";
const Home = () => {
    return (
        <main className=" min-h-[100vh] relative">
      {/* <IntroWrapper /> */}
      <div className="grain-effect"></div>

      <AnimatedClipContainer />
    
      <AboutDeveloperCard />
      <ProjectSliderWrapper />
      <DividerSlider />
      <Footer />
      <FloatingWhatsAppAvatar />
    </main>
    )
}

export default Home