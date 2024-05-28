import Navbar from "./components/Navbar";
import BurgerMenu from "./components/BurgerMenu";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects/Projects";
import Toolkit from "./sections/Toolkit/Toolkit";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Link from "./components/Link";
import { useSelector } from "react-redux";
import "./App.css";

export default function App() {
  const { isShown } = useSelector((state) => state.burgerMenuState);

  return (
    <div className="bg-slate-950">
      <BurgerMenu />
      <Navbar />
      <Link />
      <div className={isShown ? "blur-sm" : null}>
        <section className="flex min-h-[calc(100vh-70px)] items-center xl:min-h-[calc(100vh-85px)]">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="toolkit">
          <Toolkit />
        </section>
        <section
          id="contact-me"
          className="flex min-h-[calc(100vh-92px)] items-center justify-center md:min-h-[calc(100vh-72px)]"
        >
          <Contact />
        </section>
        <Footer />
      </div>
    </div>
  );
}
