import { useRef } from "react";
import Scene from "./components/three/Scene";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Stats from "./components/Stats";
import Notes from "./components/Notes";
import Collection from "./components/Collection";
import Showcase from "./components/Showcase";
import Craftsmanship from "./components/Craftsmanship";
import Ingredients from "./components/Ingredients";
import Press from "./components/Press";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { useMouse } from "./hooks/useMouse";
import { useScrollProgress } from "./hooks/useScrollProgress";

const App = (): JSX.Element => {
  const showcaseRef = useRef<HTMLElement>(null);
  const mouseRef = useMouse();
  const scrollRef = useScrollProgress(showcaseRef);

  return (
    <div className="relative">
      {/* Canvas 3D fixed di belakang seluruh konten (tidak menghalangi scroll/klik) */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Scene scrollRef={scrollRef} mouseRef={mouseRef} />
      </div>

      {/* Konten halaman */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Story />
        <Stats />
        <Notes />
        <Collection />
        <Showcase ref={showcaseRef} />
        <Craftsmanship />
        <Ingredients />
        <Press />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default App;
