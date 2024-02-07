import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <CustomCursor
          targets={['a']}
          customClass='custom-cursor'
          dimensions={50}
          fill='#FFF'
          strokeColor='#ff7328'
          targetScale={2}
          strokeWidth={15}
          smoothness={{
            movement: 0.2,
            scale: 0.1,
            opacity: 0.2,
          }}
          targetOpacity={0.5}
        />
        <Navbar />
        <ScrollToTop />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
