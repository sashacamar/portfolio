//estilos
import "./App.css";

//componentes
import NavBar from './components/desktop/NavBar/NavBar';
import AboutMe from "./components/desktop/AboutMe/AboutMe";
import Contact from "./components/desktop/Contact/Contact";
import Links from "./components/desktop/Links/Links";
import Projects from "./components/desktop/Projects/Projects";
import { useState } from "react";


function App() {
  const [mode, setMode] = useState('dark');

  return (
    <div className={`${mode === 'light' ? 'light_mode' : 'dark_mode'}`}>
      <NavBar mode={mode} setMode={setMode}></NavBar>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Contact></Contact>
      <Links></Links>
    </div>
  );
}

export default App;
