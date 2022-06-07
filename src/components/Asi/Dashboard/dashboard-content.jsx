/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import '../../../pages/i18n';

const NewAllDetails = ({ theme }) => {
  const { t } = useTranslation();
  
  return (
    <section id="resume" className="services bords lficon section-padding">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                    <div className="sec-head text-center margin-head-dashboard">
                      <h6 className="wow fadeIn i18n" data-i18n="dashboard.subtitle" data-wow-delay=".5s">{t('dashboard.subtitle')}</h6>
                      <h3 className="wow color-font i18n" data-i18n="dashboard.title">{t('dashboard.title')}</h3>
                    </div>
                </div>
            </div>
            <div className="row mt-50">
              <div className="col-lg-12 col-md-4">
                <div className="htit sm-mb30 text-center">
                  <h4 className="i18n" data-i18n="dashboard.int_question">{t('dashboard.int_question')}</h4>
                </div>
              </div>
              <div className="col-lg-12 col-md-8">
                <div className="text mt-20">
                  <p className="wow txt mb-10 fs-16" data-splitting><span className="i18n" data-i18n="dashboard.txt_inst_1">{t('dashboard.txt_inst_1')}</span> <strong className="txt-color-black i18n" data-i18n="dashboard.txt_inst_2">{t('dashboard.txt_inst_2')}</strong>, <span className="i18n" data-i18n="dashboard.txt_inst_3">{t('dashboard.txt_inst_3')}</span>.</p>
                  <p className="wow txt i18n" data-i18n="dashboard.txt_inst_4" data-splitting>{t('dashboard.txt_inst_4')}</p>
                </div>
              </div>
            </div>
            <div className="row mt-40">
                <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".5s">
                  <Link href={`/evaluation`}>
                    <a className="w-100">
                      <div className="item-box btn-box-shadow">
                        <div>
                          <span className="icon pe-7s-check"></span>
                        </div>
                        <div className="cont">
                          <h6 className="txt-color-blue i18n" data-i18n="dashboard.section_1_title">{t('dashboard.section_1_title')}</h6>
                          <p className="txt-color-black"><span className="i18n" data-i18n="dashboard.section_1_desc">{t('dashboard.section_1_desc')}</span> <strong className="txt-color-blue fw-700">0%</strong>. <strong className="txt-color-black i18n" data-i18n="dashboard.section_1_start">{t('dashboard.section_1_start')}</strong></p>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".7s">
                  <Link href={`/profile`}>
                    <a className="w-100">
                      <div className="item-box">
                          <div>
                              <span className="icon pe-7s-user-female"></span>
                          </div>
                          <div className="cont">
                              <h6 className="txt-color-blue i18n" data-i18n="dashboard.section_2_title">
                                {t('dashboard.section_2_title')}
                              </h6>
                              <p className="txt-color-black i18n" data-i18n="dashboard.section_2_desc">
                                {t('dashboard.section_2_desc')}
                              </p>
                          </div>
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".9s">
                  <Link href={`/results`}>
                    <a className="w-100">
                      <div className="item-box">
                          <div>
                              <span className="icon pe-7s-display1"></span>
                          </div>
                          <div className="cont">
                              <h6 className="txt-color-blue i18n" data-i18n="dashboard.section_3_title">{t('dashboard.section_3_title')}</h6>
                              <p className="txt-color-black i18n" data-i18n="dashboard.section_3_desc">
                                {t('dashboard.section_3_desc')}
                              </p>
                          </div>
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".5s">
                  <Link href={`/help-resources`}>
                    <a className="w-100">
                      <div className="item-box">
                        <div>
                          <span className="icon pe-7s-help1"></span>
                        </div>
                        <div className="cont">
                          <h6 className="txt-color-blue i18n" data-i18n="dashboard.section_4_title">{t('dashboard.section_4_title')}</h6>
                          <p className="txt-color-black i18n" data-i18n="dashboard.section_4_desc">
                            {t('dashboard.section_4_desc')}
                          </p>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
            </div>
        </div>
    </section>
  );
};

export default NewAllDetails;
