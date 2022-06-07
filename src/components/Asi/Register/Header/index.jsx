import React from "react";
import Link from "next/link";
import { useTranslation, Trans } from 'react-i18next';

const ContactHeader = ({ sliderRef }) => {
  const { t } = useTranslation();

  return (
    <header
      className="slider-stwo slider-register valign position-re contact-sec"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4 valign"></div>
          <div className="col-lg-8 valign">
            <div className="cont">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-md-12">
                  <div className="sec-head  text-center">
                    <h6 className="wow fadeIn i18n" data-i18n="register.subtitle" data-wow-delay=".5s">
                      {t('register.subtitle')}
                    </h6>
                    <h3 className="wow color-font i18n" data-i18n="register.title">
                      {t('register.title')}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <p className="txt-color-black fw-400 i18n" data-i18n="register.instructions">
                    {t('register.instructions')}
                  </p>
                  <div className="form wow fadeInUp mt-4" data-wow-delay=".5s">
                      <form id="contact-form">
                          <div className="controls">
                              <div className="row">
                                  <div className="col-lg-6">
                                      <div className="form-group">
                                        <label htmlFor="form_name" className="mb-0 i18n" data-i18n="register.in_name">
                                          {t('register.in_name')}
                                        </label>
                                        <input id="form_name" type="text" name="name" required="required" />
                                      </div>
                                  </div>
                                  <div className="col-lg-6">
                                      <div className="form-group">
                                        <label htmlFor="form_lastname" className="mb-0 i18n" data-i18n="register.in_lastname">
                                          {t('register.in_lastname')}
                                        </label>
                                        <input id="form_lastname" type="text" name="lastname" required="required" />
                                      </div>
                                  </div>
                                  <div className="col-lg-6 col-md-12">
                                      <div className="form-group">
                                        <label htmlFor="form_email" className="mb-0 i18n" data-i18n="register.in_email">
                                          {t('register.in_email')}
                                        </label>
                                        <input id="form_email" type="text" name="email" required="required" />
                                      </div>
                                  </div>
                                  <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                      <label htmlFor="form_pass" className="mb-0 i18n" data-i18n="register.in_pass">
                                        {t('register.in_pass')}
                                      </label>
                                      <input id="form_pass" type="password" name="pass" required="required" />
                                    </div>
                                </div>
                                <div className="col-12">
                                  <div className="form-group">
                                    <label htmlFor="form_company" className="mb-0 i18n" data-i18n="register.in_company">
                                      {t('register.in_company')}
                                    </label>
                                    <input id="form_company" type="text" name="company" required="required" />
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                      <span className="i18n" data-i18n="register.txt_accept">
                                        {t('register.txt_accept')}
                                      </span> <a href="javascript:;" data-toggle="modal" data-target="#modal_terminos" className="btn btn-link i18n padding-xs" data-i18n="register.txt_terms_conditions">
                                        {t('register.txt_terms_conditions')}
                                      </a>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-6 text-right">
                                  <span className="i18n" data-i18n="register.question_register">
                                    {t('register.question_register')}
                                  </span> 
                                  <Link href={`/login`}>
                                    <a className="btn color-font i18n padding-xs" data-i18n="register.btn_login">
                                      {t('register.btn_login')}
                                    </a>
                                  </Link>
                                </div>
                                <div className="col-12">
                                    <div className="text-center">
                                        <a href="#0" className="butn dark curve mt-30 btn-box-shadow">
                                          <span className="i18n" data-i18n="register.btn_register">
                                            {t('register.btn_register')}
                                          </span>
                                        </a>
                                    </div>
                                </div>
                              </div>
                          </div>
                      </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
