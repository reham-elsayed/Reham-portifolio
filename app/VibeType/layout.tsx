import { VibeFooter } from "../Components/VibeTypeFooter/VibeTypeFooter";

export default function Layout({children}: {children: React.ReactNode}){
    return (
        <main className="flex flex-col  relative min-h-screen">
        {children}
        <VibeFooter/>
        </main>
        )
}