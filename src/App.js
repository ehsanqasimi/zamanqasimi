import React from "react";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Nav from "./sections/Nav";
import Process from "./sections/Process";
import Footer from "./sections/Footer";
import './style.css'
import 'animate.css'
import Gallery from "./sections/Gallery";

function App() {
  React.useEffect(() => {
    let observers = document.querySelectorAll('.observe')
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry.isIntersecting)
        if (entry.isIntersecting) {
          entry.target.classList.add(entry.target.dataset.animate)
        }
      })
    }, {
      rootMargin: '0px',
      threshold: .5
    })
  
    observers.forEach(observe => {
      observer.observe(observe)
    })
  }, [])
  
  function liUnderline() {
    //console.log(scrollY)
  }


  return (
    <div onScroll={liUnderline} className="container">
      <Home />
      <main>
        <Nav />
        <About />
        <Gallery/>
        <Process />
        <Contact />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
