
import AnimatedClipContainer from "./Components/AnimatedClipContainer/AnimatedClipContainer";
import DividerSlider from "./Components/DividerSlider/DividerSlider";
import FolderCoverComponent from "./Components/FolderCoverComponent/FolderCoverComponent";
import Footer from "./Components/Footer/Footer";
import IntroHeader from "./Components/Intro/IntroHeader";
import IntroWrapper from "./Components/Intro/IntroWrapper";
import LabelHeader from "./Components/LabelsHeader/LabelHeader";
import ParallexCardWrapper from "./Components/ParallexCardsWrapper/ParallexCardWrapper";
import ProjectSliderWrapper from "./Components/ProjectsSliderComponent/ProjectSliderWrapper";
import FloatingIcons from "./Components/FloatingIcons/FloatingIcons";
import { FloatingWhatsAppAvatar } from "./Components/FloatingWhatsappAvatar/FloatingWhatsappAvater";
export default function Home() {
  return (
    <main className=" min-h-[100vh] relative">
      {/* <IntroWrapper /> */}
      <div className="grain-effect"></div>

      <AnimatedClipContainer />
      <ParallexCardWrapper />
      <ProjectSliderWrapper />
      <DividerSlider />
      <Footer />
      <FloatingWhatsAppAvatar />
    </main>
  );
}
