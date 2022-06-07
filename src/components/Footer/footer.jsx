/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useTranslation } from 'react-i18next';

const Footer = ({ hideBGCOLOR }) => {
  const { t } = useTranslation();

  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5 className="i18n" data-i18n="footer.title">
                  {t('footer.title')}
                </h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6 className="i18n" data-i18n="footer.address">
                      {t('footer.address')}
                    </h6>
                    <p>Dirección de ejemplo 123, Ciudad, País</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6 className="i18n" data-i18n="footer.email">
                      {t('footer.email')}
                    </h6>
                    <p>help@gmail.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6 className="i18n" data-i18n="footer.phone">
                      {t('footer.phone')}
                    </h6>
                    <p>+55 1234 5678</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5 className="i18n" data-i18n="footer.news">
                  {t('footer.news')}
                </h5>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                        <img src="/img/asi/inversion4.jpg" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                        <p className="i18n" data-i18n="footer.title_new1">{t('footer.title_new1')}</p>
                      </a>
                    </Link>
                    <Link href="/blog/blog-dark">
                      <a>
                        <span className="date">14 ago 2022</span>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                        <img src="/img/asi/inversion5.jpg" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                        <p className="i18n" data-i18n="footer.title_new2">{t('footer.title_new2')}</p>
                      </a>
                    </Link>
                    <Link href="/blog/blog-dark">
                      <a>
                        <span className="date">12 sep 2022</span>
                      </a>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src="/img/asi/logo_ufc_white.png" alt="" />
              </div>
              <div className="social">
                <a href="https://www.facebook.com/DFCgov" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/DFCgov" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/dfcgov/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCX6mvT0jM3R-1iuliisYXNg" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              <div className="copy-right">
                <p className="i18n" data-i18n="footer.authors">
                {t('footer.authors')} <a href="https://www.dfc.gov/" target="_blank" rel="noopener noreferrer">DFC</a>.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <p className="fs-12 mt-2 i18n txt-color-white" data-i18n="home.about_us.txt_8">
              {t('home.about_us.txt_8')}
            </p>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
