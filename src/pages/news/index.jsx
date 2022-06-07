import React from "react";
import LightTheme from "../../layouts/Light";
import Navbar from "../../components/Navbar/navbar";
import NewsList from "../../components/Asi/News/news-list";
import PageHeader from "../../components/Page-header/page-header";
import Footer from "../../components/Footer/footer";
import '../i18n';
import { useTranslation } from 'react-i18next';

const News = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  const { t } = useTranslation();

  React.useEffect(() => {
    var navbar = navbarRef.current;
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
      <PageHeader
        className="sub-bg"
        title={t('news.title')}
        paragraph={t('news.description')}
      />
      <NewsList />
      <Footer hideBGCOLOR="#1c3460" />
    </LightTheme>
  );
};

export default News;
