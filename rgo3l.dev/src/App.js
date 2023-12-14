import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from "./pages/Home"
import Navbar from './components/Navbar';


import AboutMe from './pages/AboutMe';
import ProjectPortfolio from "./pages/ProjectPortfolio"
import Experience from "./pages/Experience"
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"



function App() {
  return (
    <div className="App">
      <div className="subpages">
        <BrowserRouter>
          <Routes> 
            <Route path="/" element={<Home />} />
            
              <Route path="about-me" element={<AboutMe />} />
              <Route path="project-portfolio" element={<ProjectPortfolio />} />
              <Route path="experience" element={<Experience />} />
              <Route path="resume" element={<Resume />} />
              <Route path="contact" element={<Contact />} />


            <Route path="*" element={null} />
          </Routes>
        </BrowserRouter>
      </div>
      <div className="footer">

      </div>
    </div>
  );
}

export default App;
