import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./body/hero";
import About from "./body/about";
import Skill from "./body/skill";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Project from "./body/project";
import Contact from "./body/contact";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen  bg-gray-900">
      <Header />
      <div>
        <Hero />
        <About />
        <Skill />
        <Project />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
