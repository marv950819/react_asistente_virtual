/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
import ContactHeader from "../../components/Asi/Contact/contact-header";
import ContactForm from "../../components/Asi/Contact/contact-form";
import '../i18n';

const Contact = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    document.querySelector("body").classList.add("contact-page");
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
    return () => {
      document.querySelector("body").classList.remove("contact-page");
    };
  }, [navbarRef]);

  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <ContactHeader blackStar />
      <div className="main-content">
        <ContactForm />
        <div className="map" id="ieatmaps">
          
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.038177125012!2d-77.02968034843906!3d38.900242279470056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b793fe42820b%3A0x7892c483be8aebf1!2s1101%20New%20York%20Avenue%2C%201100%20New%20York%20Ave%20NW%2C%20Washington%2C%20DC%2020005%2C%20EE.%20UU.!5e0!3m2!1ses!2smx!4v1654119174171!5m2!1ses!2smx" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <Footer hideBGCOLOR="#1c3460" />
      </div>
    </LightTheme>
  );
};

export default Contact;
