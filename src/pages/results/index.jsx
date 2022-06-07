import React from "react";
import LightTheme from "../../layouts/Light";
import Navbar from "../../components/Navbar/navbar_in";
import ResultsHeader from "../../components/Asi/Results/results-header";
import ResultsContent from "../../components/Asi/Results/results-content";
import Footer from "../../components/Footer/footer";
import '../i18n';

const Results = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
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
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <LightTheme>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <ResultsHeader />
      <ResultsContent theme="light" blog={"blog"} />
      <Footer hideBGCOLOR="#1c3460" />
    </LightTheme>
  );
};

export default Results;
