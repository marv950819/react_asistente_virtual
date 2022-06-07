/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 img">
            <img src="/img/dfc/2.jpg" className="thumparallax-down"  alt="" />
          </div>
          <div className="col-lg-6 col-md-12 valign mb-50 about-section-1" >
            <div className="content pt-0">
              <h3 className="fw-600 text-u ls1 mb-30 color-font">
                {t('home.about_us.title')}
              </h3>
              <p className="wow txt txt-color-black fs-14" data-splitting>
                <i className="i18n" data-i18n="home.about_us.txt_1">{t('home.about_us.txt_1')}</i>
              </p>
              <p className="wow txt txt-color-black fs-14" data-splitting>
                <i className="i18n" data-i18n="home.about_us.txt_2">{t('home.about_us.txt_2')}</i>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-12 about-section-2">
                <div className="content pt-0">
                    <h4 className="wow color-font i18n" data-i18n="home.about_us.program_1">{t('home.about_us.program_1')}</h4>
                    <h6 className="mt-3 i18n" data-i18n="home.about_us.subtitle_1">{t('home.about_us.subtitle_1')}</h6>
                    <p className="wow txt txt-color-black fs-14 mt-4 i18n" data-i18n="home.about_us.txt_3">
                      {t('home.about_us.txt_3')}
                    </p>
                    <p className="wow txt txt-color-black fs-14 i18n" data-i18n="home.about_us.txt_4">
                      {t('home.about_us.txt_4')}
                    </p>
                    <p classame="wow txt txt-color-black fs-14 i18n" data-i18n="home.about_us.txt_5">
                      {t('home.about_us.txt_5')}
                    </p>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
                <div className="img">
                    <img className="thumparallax-down mb-5" src="/img/dfc/2xwomen.jpg" alt="" />
                </div>
            </div>
        </div>
      
      <div className="row">
          <div className="col-lg-6 col-md-12 justify-content-center align-items-center">
              <div className="embed-responsive embed-responsive-16by9 btn-box-shadow">
                  <iframe src="https://www.youtube.com/embed/VscZXY6TldA?rel=0" title="YouTube video" allowFullScreen></iframe>
              </div>
          </div>
          <div className="col-lg-5 col-md-12 about-section-3">
              <div className="content pt-0">
                  <p className="wow txt txt-color-black fs-14 mt-0 i18n" data-i18n="home.about_us.txt_6">
                    {t('home.about_us.txt_6')}
                  </p>
                  <p className="wow txt txt-color-black fs-14 mt-2 i18n" data-i18n="home.about_us.txt_7">
                    {t('home.about_us.txt_7')}
                  </p>
              </div>
          </div>
      </div>
      </div>
    </section>
  );
};

export default AboutUs;
