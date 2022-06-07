import React from "react";
import Navbar from "../../components/Navbar/navbar";
import HeaderSlider from "../../components/Asi/Home/home-header-slider";
import Process from "../../components/Asi/Home/home-process";
import VideoWithTestimonials from "../../components/Asi/Home/home-testimonials";
import Projects from "../../components/Asi/Home/home-projects";
import Numbers from "../../components/Asi/Home/home-numbers.jsx";
import About from "../../components/Asi/Home/home-about.jsx";
import News from "../../components/Asi/Home/home-news.jsx";
import appData from '../../data/app.json'
import CallToAction from "../../components/Asi/Home/home-call-to-action.jsx";
import TestimonialsLinks from "../../components/Asi/Home/home-testimonials-links"
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
import '../i18n';
 
const Homepage = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
      
    }, 1000);
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
        logo.setAttribute("src", appData.darkLogo);
      } else {
        navbar.classList.remove("nav-scroll");
        logo.setAttribute("src", appData.lightLogo);
      }
    });
  }, [fixedSlider, MainContent, navbarRef]);
  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <HeaderSlider sliderRef={fixedSlider} />
      <div ref={MainContent} className="main-content">
        <Process />
        <VideoWithTestimonials />
        <TestimonialsLinks />
        <Projects />
        <Numbers />
        <About />
        <News />
        <CallToAction />
        <Footer hideBGCOLOR="#1c3460" />
      </div>
    </LightTheme>
  );
};

export default Homepage;
