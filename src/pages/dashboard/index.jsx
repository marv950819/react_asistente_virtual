import React from "react";
import LightTheme from "../../layouts/Light";
import Navbar from "../../components/Navbar/navbar_in";
import DashboardContent from "../../components/Asi/Dashboard/dashboard-content";
import DashboardHeader from "../../components/Asi/Dashboard/dashboard-header";
import Footer from "../../components/Footer/footer";
import '../i18n';

const Dashboard = () => {
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
      <DashboardHeader />
      <DashboardContent theme="light" blog={"blog"} />
      <Footer hideBGCOLOR="#1c3460" />
    </LightTheme>
  );
};

export default Dashboard;
