/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";
import { useTranslation } from 'react-i18next';

const Navbar = ({ lr, nr, theme }) => {
  const lngs = {
    en: { nativeName: 'English' },
    es: { nativeName: 'Español' }
  };
  const { t, i18n } = useTranslation();

  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change light ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/">
          <a className="logo">
            {theme ? (
              theme === "themeL" ? (
                <img ref={lr} src={appData.darkLogo} alt="logo" />
              ) : (
                <img ref={lr} src={appData.lightLogo} alt="logo" />
              )
            ) : (
              <img ref={lr} src={appData.lightLogo} alt="logo" />
            )}
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href={`/`}>
                <a className="nav-link">{t('menu.home')}</a>
              </Link>
            </li>
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {t('menu.tools')}
              </span>
              <div className="dropdown-menu">
                <Link href={`/help-resources`}>
                  <a className="dropdown-item">{t('menu.tools_resources')}</a>
                </Link>
                <Link href={`/allies`}>
                  <a className="dropdown-item">{t('menu.tools_providers')}</a>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href={`/news`}>
                <a className="nav-link">{t('menu.news')}</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={`/contact`}>
              <a className="nav-link">{t('menu.contact')}</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={`/login`}>
                <a className="nav-link">{t('menu.login')}</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={`/register`}>
                <a className="nav-link">{t('menu.register')}</a>
              </Link>
            </li>
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {t('lang_abrev')}
              </span>
              <div className="dropdown-menu">
                {Object.keys(lngs).map((lng) => (
                  <a className="dropdown-item" key={lng} onClick={() => i18n.changeLanguage(lng)}>
                    {lngs[lng].nativeName}
                  </a>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
