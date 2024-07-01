import React, { useState, useEffect } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/Resume";
import PageNotFound from "./components/PageNotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import "./style.css";
import "./App.css";
import { IntlProvider } from 'react-intl';
import messagesIt from "./translations/it.json";
import messagesEn from "./translations/en.json";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [locale, setLocale] = useState('en');

  const messages = (locale === 'en')? messagesEn : messagesIt; 

  const [load, updateLoad] = useState(true);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      updateLoad(false);
    });
  }, []);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Routes>
            <Route exact path="/" element={<>
                                            <Navbar currentLocale={locale} onChangeLocale={setLocale} displayScrollLinks={true}/>
                                            <ScrollToTop smooth color="white"/>
                                            <Home />
                                            <About />
                                            <Skills />
                                            <Projects />
                                            <Resume />
                                          </>} />
            <Route path="*" element={<>
                                      <Navbar currentLocale={locale} onChangeLocale={setLocale} displayScrollLinks={false}/>
                                      <PageNotFound />
                                      </>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </IntlProvider>
  );
}

export default App;
