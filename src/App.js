import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import { Intro } from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Projects from "./Components/Projects/Projects";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
import Blogs from "./Components/Blogs/Blogs";
import Skills from "./Components/Skills/Skills";
import Interests from "./Components/Interests/Interests";
function App() {
  const theme=useContext(themeContext)
  const darkMode=theme.state.darkMode
  return (
    <div className="App"  style={{background:darkMode?'#111827':'#87878745',
    color:darkMode?'white':''}}>
    <Navbar/>
    <Intro/>
    <Services/>
    <Skills/> 
    <Projects/>
    <Blogs/>
    <Interests/>
    <Contact/>
    <Footer/>
    
    </div>
  );
}

export default App;
