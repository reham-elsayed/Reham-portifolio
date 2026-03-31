import EffectsGrid from "../Components/EffectsRegestry/EffectsRegestry";
import HeroVibeGrid from "../Components/HeroProject/HeroVibeGrid";
import EngineInspector from "../Components/TerminalContent/TerminalContent";
import ProjectBackgroundEffect from "../Components/ProjectBackgroundEffect/ProjectBackgroundEffect";
import { TermsSection } from "../Components/CanvaAppTerms/CanvaAppTerms";
import { VibeFooter } from "../Components/VibeTypeFooter/VibeTypeFooter";

export default function VibeType(){
    return (
        <>
        <HeroVibeGrid/>
        <ProjectBackgroundEffect />
        <EngineInspector/>
        <EffectsGrid/>
        <TermsSection/>
        <VibeFooter/>
    
        </>
    )
}