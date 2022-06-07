import React from "react";
import Link from "next/link";
import { useTranslation } from 'react-i18next';

const Process = ({ style, lines }) => {
  const { t } = useTranslation();

  return (
    <section
      className={`services bords section-padding mt-80 ${
        style === "4item" ? "lficon" : lines ? "" : "pt-0"
      }`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                {t('home.process.subtitle')}
              </h6>
              <h3 className="wow color-font">
                {t('home.process.title')}
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            key={1}
            className="col-lg-4 wow fadeInLeft"
            data-wow-delay=".3s"
            >
            <div className="item-box md-mb50">
              <span className={`icon pe-7s-menu`}></span>
              <h6>{t('home.process.step1')}</h6>
              <p>{t('home.process.step1_desc')}</p>
            </div>
          </div>
          <div
            key={1}
            className="col-lg-4 wow fadeInLeft"
            data-wow-delay=".6s"
            >
            <div className="item-box md-mb50">
              <span className={`icon pe-7s-display2`}></span>
              <h6>{t('home.process.step2')}</h6>
              <p>{t('home.process.step2_desc')}</p>
            </div>
          </div>
          <div
            key={1}
            className="col-lg-4 wow fadeInLeft"
            data-wow-delay=".9s"
            >
            <div className="item-box md-mb50">
              <span className={`icon pe-7s-check`}></span>
              <h6>{t('home.process.step3')}</h6>
              <p>{t('home.process.step3_desc')}</p>
            </div>
          </div>
        </div>
      </div>
      {lines ? (
        <>
          <div className="line top left"></div>
          <div className="line bottom right"></div>
        </>
      ) : null}

      <div className="w-100 text-center mt-40">
        <Link href={`/register`}>
          <a className="butn dark curve btn-box-shadow wow fadeInUp i18n" data-i18n="home.process.btn_register" data-wow-delay="1s">
            {t('home.process.btn_register')}
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Process;
