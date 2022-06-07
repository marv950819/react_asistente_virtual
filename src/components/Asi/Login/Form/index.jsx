import React from "react";
import Link from "next/link";
import { useTranslation, Trans } from 'react-i18next';

const ContactHeader = ({ sliderRef }) => {
  const { t } = useTranslation();

  return (
    <header
      className="slider-sthree slider-register valign position-re contact-sec"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 valign">
            <div className="cont">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-md-12">
                    <div className="sec-head text-center">
                      <h6 className="wow fadeIn i18n" data-i18n="login.subtitle" data-wow-delay=".5s">
                        {t('login.subtitle')}
                      </h6>
                      <h3 className="wow color-font i18n" data-i18n="login.title">
                        {t('login.title')}
                      </h3>
                    </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-10 col-md-12">
                  <p className="txt-color-black fw-400 i18n" data-i18n="login.instructions">
                    {t('login.instructions')}
                  </p>
                  <div className="form wow fadeInUp mt-4" data-wow-delay=".5s">
                      <form id="contact-form">
                          <div className="controls">
                              <div className="row">
                                <div className="col-lg-10 mx-auto col-md-12 mt-20">
                                    <div className="form-group">
                                      <label htmlFor="form_email" className="mb-0 i18n" data-i18n="login.in_email">
                                        {t('login.in_email')}
                                      </label>
                                      <input id="form_email" type="text" name="email" required="required" className="mt-0" />
                                    </div>
                                </div>
                                <div className="col-lg-10 mx-auto col-md-12">
                                  <div className="form-group">
                                    <label htmlFor="form_pass" className="mb-0 i18n" data-i18n="login.in_pass">
                                      {t('login.in_pass')}
                                    </label>
                                    <input id="form_pass" type="password" name="pass" required="required" className="mt-0" />
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="mt-4 text-right">
                                    <span className="fs-13 i18n" data-i18n="login.comment_1">
                                      {t('login.comment_1')}
                                    </span> 
                                    <Link href={`/register`}>
                                      <a className="btn color-font fw-500 fs-14 i18n padding-xs" data-i18n="login.register">
                                        {t('login.register')}
                                      </a>
                                    </Link>
                                  </div>
                                  <div className="text-center">
                                    <Link href={`/dashboard`}>
                                      <a className="butn dark curve mt-30 btn-box-shadow">
                                        <span className="i18n" data-i18n="login.btn_login">
                                          {t('login.btn_login')}
                                        </span>
                                      </a>
                                    </Link>
                                  </div>
                                </div>
                                <div className="mt-4 col-12 text-center fs-14">
                                  <p className="i18n" data-i18n="login.question_remember">{t('login.question_remember')}</p>
                                  <a  data-toggle="modal" data-target="#modal_recuperar_contrasena" className="btn btn-link fw-500 fs-14 i18n padding-xs" data-i18n="login.btn_recover">{t('login.btn_recover')}</a>
                                </div>
                              </div>
                          </div>
                      </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 valign"></div>
        </div>
      </div>

      <div className="circle-color">
        <div className="gradient-circle"></div>
        <div className="gradient-circle two"></div>
      </div>
    </header>
  );
};

export default ContactHeader;
