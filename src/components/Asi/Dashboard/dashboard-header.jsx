/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useTranslation } from 'react-i18next';

const DashbpradHeader = ({className}) => {
  const { t, i18n } = useTranslation();

  return (
    <section className={`page-header ${className && className}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-9">
            <div className="cont text-center">
              <h1 className="mb-10 fw-700">
                <span className="i18n" data-i18n="dashboard.txt_hello">{t('dashboard.txt_hello')}</span>
                <span className="color-font">María González</span>
              </h1>
              <p>
                <span className="i18n" data-i18n="dashboard.txt_welcome_1">{t('dashboard.txt_welcome_1')}</span>
                <strong className="txt-color-black i18n" data-i18n="dashboard.txt_welcome_2">{t('dashboard.txt_welcome_2')}</strong> <span className="i18n" data-i18n="dashboard.txt_welcome_3">{t('dashboard.txt_welcome_3')}</span> <strong className="txt-color-black i18n" data-i18n="dashboard.txt_welcome_4">{t('dashboard.txt_welcome_4')}</strong>
                <span className="i18n" data-i18n="dashboard.txt_welcome_5">{t('dashboard.txt_welcome_5')}</span>.
              </p>
            </div>
          </div>
          <div className="col-lg-10">
            <div className="img">
              <img src="/img/asi/uns/14.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashbpradHeader;