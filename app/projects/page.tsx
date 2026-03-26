import EffectsGrid from "../Components/EffectsRegestry/EffectsRegestry";
import HeroVibeGrid from "../Components/HeroProject/HeroVibeGrid";
import EngineInspector from "../Components/TerminalContent/TerminalContent";
import ProjectBackgroundEffect from "../Components/ProjectBackgroundEffect/ProjectBackgroundEffect";

export default function Projects(){
    return (
        <main className="flex flex-col  relative">
        <HeroVibeGrid/>
        <ProjectBackgroundEffect />
        <EngineInspector/>
        <EffectsGrid/>
        </main>
    )
}