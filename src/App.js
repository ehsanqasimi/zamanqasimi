import React from "react";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Nav from "./sections/Nav";
import Process from "./sections/Process";
import Footer from "./sections/Footer";
import './style.css'

function App() {
  return (
    <div className="container">
      <Home />
      <main>
        <Nav />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
