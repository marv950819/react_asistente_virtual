import React from "react";
import LightTheme from "../../layouts/Light";
import Navbar from "../../components/Navbar/navbar_in";
import QuestionHeader from "../../components/Asi/Question/question-header";
import QuestionContent from "../../components/Asi/Question/question-content-true-false";
import Footer from "../../components/Footer/footer";
import '../i18n';

const Sections = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  const img_section = '/img/asi/uns/20_sm.jpg';

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
      <QuestionHeader progress={10} />
      <QuestionContent theme="light" imgSection={img_section} />
      <Footer hideBGCOLOR="#1c3460" />
    </LightTheme>
  );
};

export default Sections;