//estilos
import "./App.css";

//componentes
import NavBar from './components/desktop/NavBar/NavBar';
import AboutMe from "./components/desktop/AboutMe/AboutMe";
import Contact from "./components/desktop/Contact/Contact";
import Links from "./components/desktop/Links/Links";
import Projects from "./components/desktop/Projects/Projects";


function App() {
  return (
    <div >
      <NavBar></NavBar>
      <AboutMe></AboutMe>
      <Contact></Contact>
      <Links></Links>
      <Projects></Projects>
    </div>
  );
}

export default App;
