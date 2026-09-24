import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import Marquee from "./sections/Marquee";
import WorkIndex from "./sections/WorkIndex";
import Seshat from "./sections/Seshat";
import Fordklyn from "./sections/Fordklyn";
import TwoUp from "./sections/TwoUp";
import MoreBuilds from "./sections/MoreBuilds";
import Honors from "./sections/Honors";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Stack from "./sections/Stack";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <WorkIndex />
        <Seshat />
        <Fordklyn />
        <TwoUp />
        <MoreBuilds />
        <Honors />
        <Experience />
        <Education />
        <Stack />
      </main>
      <Contact />
    </>
  );
}
