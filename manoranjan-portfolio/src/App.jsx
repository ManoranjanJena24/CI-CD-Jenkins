import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import EducationAwards from "./components/EducationAwards";
import Contact from "./components/Contact";

// Import your newly decoupled constants
import {
  profile,
  skillGroups,
  experiences,
  projects,
} from "./constants/personalData.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Navbar name={profile.name} />
      <Hero profile={profile} />
      <Skills skillGroups={skillGroups} />
      <Experience experiences={experiences} />
      <Projects projects={projects} />
      <EducationAwards />
      <Contact profile={profile} />
    </div>
  );
}
