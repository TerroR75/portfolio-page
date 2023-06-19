import { useState } from "react";
import ContactSection from "./Components/ContactSection";
import EntrySection from "./Components/EntrySection";
import ProjectsSection from "./Components/ProjectsSection";
import AboutSection from "./Components/AboutSection";
import NavBar from "./Components/NavBar";
import "./styles/App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <EntrySection />
      <NavBar />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default App;
