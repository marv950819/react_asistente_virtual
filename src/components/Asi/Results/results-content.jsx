/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useTranslation } from 'react-i18next';

import '../../../pages/i18n';

const ResultsContent = ({ theme }) => {
  const { t } = useTranslation();
  
  return (
    <section className="contact-sec style2 section-padding position-re">
      <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="sec-head  text-left margin-head-dashboard">
                <h6 className="wow fadeIn" data-wow-delay=".5s">María González</h6>
                <h4 className="wow txt-color-blue">{t('results.subtitle_1')}</h4>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-20">
            <div className="col-lg-11 wow fadeInUp" data-wow-delay=".5s">
              <div className="w-100">
                <h6 className="txt-color-blue fs-17 mt-3">{t('results.subtitle_2')}</h6>
                <p className="txt-color-black mt-2">{t('results.txt_rec_2')}</p>
                <p className="txt-color-black fw-400 mt-2">{t('results.txt_rec_3')}</p>
                <div className="row">
                  <div className="col-xs-12 col-lg-6">
                    <h6 className="txt-color-blue fs-17 mt-3">{t('results.subtitle_3')}</h6>
                    <ul className="mt-3 ml-2 list-group">
                      <li className="list-group-item">
                        <Link href={'/allies'}>
                          <a target="_blank" rel="noopener noreferrer" className="fs-14 text-info"> <i className="far fa-building txt-color-blue"></i> Bancolombia</a>
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link href={'/allies'}>
                          <a target="_blank" rel="noopener noreferrer" className="fs-14 text-info"><i className="far fa-building txt-color-blue"></i> Banco de Chile</a>
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link href={'/allies'}>
                          <a target="_blank" rel="noopener noreferrer" className="fs-14 text-info"><i className="far fa-building txt-color-blue"></i> HSBC</a>
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link href={'/allies'}>
                          <a target="_blank" rel="noopener noreferrer" className="fs-14 text-info"><i className="far fa-building txt-color-blue"></i> BBVA</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xs-12 col-lg-6">
                    <h6 className="txt-color-blue fs-17 mt-3">{t('results.subtitle_4')}</h6>
                    <ul className="mt-3 ml-2 list-group">
                      <li className="list-group-item">
                        <a href="./admin/assets/files/help/Business_Plan_Help.pdf" target="_blank" className="fs-14 text-info"> <i className="far fa-file-pdf txt-color-blue"></i> <span>{t('results.resource_1')}</span></a>
                      </li>
                      <li className="list-group-item">
                        <a href="./admin/assets/files/help/Financial_Projections_Help.pdf" target="_blank" className="fs-14 text-info"><i className="far fa-file-pdf txt-color-blue"></i> <span>{t('results.resource_2')}</span></a>
                      </li>
                      <li className="list-group-item">
                        <a href="./admin/assets/files/help/Historical_Statement_Help.pdf" target="_blank" className="fs-14 text-info"><i className="far fa-file-pdf txt-color-blue"></i> <span>{t('results.resource_3')}</span></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-100 mt-30">
                <h6 className="txt-color-blue">{t('results.subtitle_5')}</h6>
                <div className="table-responsive mt-20">
                  <table className="table border table-bordered fs-14">
                      <tbody>
                        <tr>
                          <td className="fw-500 i18n w-180p">{t('results.company')}</td>
                          <td>{t('results.name_company')}</td>
                        </tr>
                        <tr>
                          <td className="fw-500 i18n w-180p">{t('results.progress')}</td>
                          <td>80%</td>
                        </tr>
                        <tr>
                          <td className="fw-500 i18n w-180p">{t('results.download')}</td>
                          <td className="text-info fw-500">
                            <a href="./files/DFC-ResultsExample.xlsx" className="text-success">
                              {t('results.results_in_excel')}
                            </a>
                          </td>
                        </tr>
                      </tbody>
                  </table>
                </div>
              </div>
              <div className="w-100 mt-20">
                <h6 className="txt-color-blue">{t('results.subtitle_6')}</h6>
                <p className="txt-color-black mt-2">
                  {t('results.txt_inst_section')}
                </p>
                <div className="table-responsive mt-3">
                  <table className="table border table-bordered mb-0 table-sm fs-14">
                      <thead>
                          <tr>
                            <th>{t('results.txt_section')}</th>
                            <th>{t('results.txt_progress')}</th>
                            <th>{t('results.txt_observation')}</th>
                            <th>{t('results.txt_help_resource')}</th>
                          </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-left">{t('results.section_1')}</td>
                          <td className="text-center">100%</td>
                          <td className="text-left">{t('results.section_1_desc')}</td>
                          <td className="text-center">-</td>
                        </tr>
                        <tr>
                          <td className="text-left">{t('results.section_2')}</td>
                          <td className="text-center">80%</td>
                          <td className="text-left">{t('results.section_2_desc')}</td>
                          <td className="text-center">-</td>
                        </tr>
                        <tr>
                          <td className="text-left">{t('results.section_3')}</td>
                          <td className="text-center">93%</td>
                          <td className="text-left">{t('results.section_3_desc')}</td>
                          <td className="text-center">
                            <i className="far fa-file-pdf txt-color-blue"></i> <a href="./admin/assets/files/help/Business_Plan_Help.pdf" target="_blank" className="fs-13 fw-300 text-info">{t('results.resource_1')}</a>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-left">{t('results.section_4')}</td>
                          <td className="text-center">91%</td>
                          <td className="text-left">{t('results.section_4_desc')}</td>
                          <td className="text-center">
                            <i className="far fa-file-pdf txt-color-blue"></i><br /><a href="./admin/assets/files/help/Historical_Statement_Help.pdf" target="_blank" className="fs-13 fw-300 text-info">{t('results.resource_3')}</a>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-left">{t('results.section_5')}</td>
                          <td className="text-center">30%</td>
                          <td className="text-center">-</td>
                          <td className="text-center">-</td>
                        </tr>
                      </tbody>
                  </table>
                </div>
              </div>
              <div className="w-100 mt-30">
                <h6 className="txt-color-blue">{t('results.subtitle_7')}</h6>
                <div className="w-100 mt-3 mb-3">
                  <p className="fs-16"><span>{t('results.txt_documents')}</span> <strong className="txt-color-black">{t('results.txt_documents_reg')}</strong>.</p>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="wow fadeIn" data-wow-delay="0.5s">
                    <form className="mt-5">
                      <div className="form-group">
                        <label htmlFor="answer_file_1">{t('results.txt_file')}</label>
                        <input type="file" className="form-control" id="answer_file_1" />
                        <small className="mt-2">{t('results.txt_file_help')}</small>
                      </div>
                      <div className="mt-3 text-right">
                        <a href="#!" className="butn dark curve btn-box-shadow">
                          <span>{t('results.btn_register')}</span>
                        </a>
                      </div>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default ResultsContent;