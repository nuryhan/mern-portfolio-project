import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Homepage/Navbar";
import About from "./components/Homepage/About";
import Header from "./components/Homepage/Header";
import Education from "./components/Homepage/Education";
import Projects from "./components/Homepage/Projects";
import Experience from "./components/Homepage/Experience";
import Contact from "./components/Homepage/Contact";
import Login from "./components/Homepage/Login";
import Footer from "./components/Homepage/Footer";
// edit components
import EditEducation from "./components/editComponents/EditEducation";
import Admin from "./components/adminComponents/Admin";
import EditProjects from "./components/editComponents/EditProjects";
import EditExperience from "./components/editComponents/EditExperience";
import EditAbout from "./components/editComponents/EditAbout";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Element className="Home">
                <Header />
              </Element>
              <Element className="About">
                <About />
              </Element>
              <Element className="Education">
                <Education />
              </Element>
              <Element className="Projects">
                <Projects />
              </Element>
              <Element className="Experience">
                <Experience />
              </Element>
              <Element className="Contact">
                <Contact />
              </Element>
            </>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/edit/:id" element={<EditAbout />} />
        <Route path="/admin" element={<Admin />} />

        <Route path="/editeducation/:id" element={<EditEducation />} />
        <Route path="/editproject/:id" element={<EditProjects />} />
        <Route path="/editexperience/:id" element={<EditExperience />} />
      </Routes>
      <Footer />
    </div>
  );
}

// <Routes>
// <Route path="/" element={<HomeScreen />} />
// <Route path="/product/:id" element={<ProductScreen />} />
// <Route path="/cart" element={<CartScreen />} />
// </Routes>

export default App;
