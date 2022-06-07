import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
import ProjectDetailsHeader from "../../components/Asi/Projects/project-details-header";
import ProjectIntroduction from "../../components/Asi/Projects/project-details-intro";
import ProjectGallery from "../../components/Asi/Projects/project-details-gallery";
import ProjectDescription from "../../components/Asi/Projects/project-details-description";
import ProjectVideo from "../../components/Asi/Projects/project-details-video";
import NextProject from "../../components/Asi/Projects/project-details-next-project";
import appData from '../../data/app.json'
import '../i18n';

const ProjectDetails = () => {
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
        logo.setAttribute("src", appData.darkLogo);
      } else {
        navbar.classList.remove("nav-scroll");
        logo.setAttribute("src", appData.lightLogo);
      }
    });
  }, [navbarRef]);
  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <div className="wrapper">
        <ProjectDetailsHeader  />
        <ProjectIntroduction  />
        <ProjectGallery />
        <ProjectDescription  />
        <ProjectVideo  />
        <NextProject />
        <Footer hideBGCOLOR="#1c3460" />
      </div>
    </LightTheme>
  );
};

export default ProjectDetails;
