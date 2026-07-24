import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Sectors from "./components/Sectors";
import Commitments from "./components/Commitments";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// ============================================================================
// App.jsx — assemble toutes les sections du site, une par une.
// ============================================================================
// La page est un "one-page" : chaque section a un id, et les liens du menu
// (voir src/data/content.js -> navLinks) font défiler jusqu'à cette section.
// Pour réordonner ou retirer une section, il suffit de déplacer/retirer
// la ligne correspondante ci-dessous.
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Sectors />
        <Commitments />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
