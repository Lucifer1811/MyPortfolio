import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/projects/Projects";
import Contacts from "./components/contacts/Contacts";
import Cursor from "./components/cursor/Cursor";
import Resume from "./components/resume/Resume";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="About">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Resume">
        <Resume />
      </section>
      <section id="Projects">
        <Parallax type="projects" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contacts />
      </section>
    </div>
  );
};

export default App;
