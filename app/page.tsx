import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer"
import WorkExperience from "@/components/WorkExperience";
import Tech from "@/components/Tech";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col  overflow-clip mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <RecentProjects />
        <WorkExperience />
        <Tech />
        <Clients />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
