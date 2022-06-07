/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import '../../../pages/i18n';

const SectionsContent = ({ theme }) => {
  const { t } = useTranslation();
  const cpStyle = {
    path: {
      stroke: "rgb(18, 194, 233)",
    },
    trail: {
      stroke: theme ? (theme == "dark" ? "#0f1013" : "#e5e5e5") : "",
    },
    text: {
      fill: theme ? (theme == "dark" ? "#ffffff" : "#4e4e4e") : "",
      // Text size
      fontSize: "18px",
    },
  };
  
  return (
    <section className="contact-sec style2 position-re">
      <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-12 mx-auto mt-10 mb-50">
              <div className="img-box">
                  <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-12 toright">
                        <div className="full-width">
                          <div className="img sizxl skills-circle card-section-questions w-100 mb-30 wow fadeIn" data-wow-delay=".6" data-tooltip-tit={t('evaluation.section_1')} data-tooltip-sub="90% de avance">
                              <img src="/img/asi/uns/15.jpg" className="img-fluid" alt="" />
                              <div className="p-2 pb-3">
                                <div className="item wow fadeInLeft mt-30" data-wow-delay=".6">
                                  <div className="skill" data-value="0.90">
                                    <span className="custom-font">90%</span>
                                    <CircularProgressbar
                                      value={90}
                                      strokeWidth={2}
                                      styles={cpStyle}
                                    />
                                  </div>
                                  <div className="cont">
                                    <span>{t('evaluation.txt_progress')}</span>
                                    <h6>{t('evaluation.section_1')}</h6>
                                  </div>
                                </div>
                                <h6 className="txt-color-blue fs-16 fw-300 mt-20 text-center">
                                  <span>{t('evaluation.txt_at_moment')}</span> <br /> 
                                  <span>{t('evaluation.section_1_questions')}</span>
                                </h6>
                              </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12 toright">
                        <div className="full-width">
                          <div className="img sizxl skills-circle card-section-questions w-100 mb-30 wow fadeIn" data-wow-delay=".9" data-tooltip-tit={t('evaluation.section_2')} data-tooltip-sub="50% de avance">
                            <img src="/img/asi/uns/16.jpg" className="img-fluid" alt="" />
                            <div className="p-2 pb-3">
                              <div className="item wow fadeInLeft mt-30" data-wow-delay=".6s">
                                <div className="skill" data-value="0.50">
                                  <span className="custom-font">50%</span>
                                  <CircularProgressbar
                                    value={50}
                                    strokeWidth={2}
                                    styles={cpStyle}
                                  />
                                </div>
                                <div className="cont">
                                  <span>{t('evaluation.txt_progress')}</span>
                                  <h6>{t('evaluation.section_2')}</h6>
                                </div>
                              </div>
                              <h6 className="txt-color-blue fs-16 fw-300 mt-20 text-center">
                                <span>{t('evaluation.txt_at_moment')}</span> <br /> 
                                <span>{t('evaluation.section_2_questions')}</span>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12 toright">
                        <div className="full-width text-left">
                          <div className="img sizxl skills-circle card-section-questions w-100 mb-30 wow fadeIn" data-wow-delay="1.2" data-tooltip-tit={t('evaluation.section_3')} data-tooltip-sub="65% de avance">
                            <img src="/img/asi/uns/17.jpg" className="img-fluid" alt="" />
                            <div className="p-2 pb-3">
                              <div className="item wow fadeInLeft mt-30" data-wow-delay=".3s">
                                <div className="skill" data-value="0.65">
                                  <span className="custom-font">65%</span>
                                  <CircularProgressbar
                                    value={65}
                                    strokeWidth={2}
                                    styles={cpStyle}
                                  />
                                </div>
                                <div className="cont">
                                  <span>{t('evaluation.txt_progress')}</span>
                                  <h6>{t('evaluation.section_3')}</h6>
                                </div>
                              </div>
                              <h6 className="txt-color-blue fs-16 fw-300 mt-20 text-center">
                                <span>{t('evaluation.txt_at_moment')}</span> <br />
                                <span>{t('evaluation.section_3_questions')}</span>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-12 offset-md-2">
                          <div className="full-width text-left">
                            <div className="img sizxl skills-circle card-section-questions w-100 mb-30 wow fadeIn" data-wow-delay="1.5" data-tooltip-tit={t('evaluation.section_4')} data-tooltip-sub="80% de avance">
                              <img src="/img/asi/uns/18.jpg" className="img-fluid" alt="" />
                              <div className="p-2 pb-3">
                                <div className="item wow fadeInLeft mt-30" data-wow-delay=".6">
                                  <div className="skill" data-value="0.80">
                                    <span className="custom-font">80%</span>
                                    <CircularProgressbar
                                      value={80}
                                      strokeWidth={2}
                                      styles={cpStyle}
                                    />
                                  </div>
                                  <div className="cont">
                                    <span>{t('evaluation.txt_progress')}</span>
                                    <h6>{t('evaluation.section_4')}</h6>
                                  </div>
                                </div>
                                <h6 className="txt-color-blue fs-16 fw-300 mt-20 text-center">
                                  <span>{t('evaluation.txt_at_moment')}</span> <br />
                                  <span>{t('evaluation.section_4_questions')}</span>
                                </h6>
                              </div>
                            </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="full-width text-left">
                          <div className="img sizxl skills-circle card-section-questions w-100 mb-30 wow fadeIn" data-wow-delay="1.5" data-tooltip-tit={t('evaluation.section_5')} data-tooltip-sub="20% de avance">
                            <img src="/img/asi/uns/19.jpg" className="img-fluid" alt="" />
                            <div className="p-2 pb-3">
                              <div className="item wow fadeInLeft mt-30" data-wow-delay=".6">
                                <div className="skill" data-value="0.20">
                                  <span className="custom-font">20%</span>
                                  <CircularProgressbar
                                    value={20}
                                    strokeWidth={2}
                                    styles={cpStyle}
                                  />
                                </div>
                                <div className="cont">
                                  <span>{t('evaluation.txt_progress')}</span>
                                  <h6>{t('evaluation.section_5')}</h6>
                                </div>
                              </div>
                              <h6 className="txt-color-blue fs-16 fw-300 mt-20 text-center">
                                <span>{t('evaluation.txt_at_moment')}</span> <br /> 
                                <span>{t('evaluation.section_5_questions')}</span>
                              </h6>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default SectionsContent;