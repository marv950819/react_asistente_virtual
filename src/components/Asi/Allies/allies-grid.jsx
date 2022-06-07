/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import tooltipEffect from "../../../common/tooltipEffect";
import { useTranslation } from 'react-i18next';

const AlliesGrid = () => {
  const { t } = useTranslation();

  React.useEffect(() => {
    setTimeout(() => {
      tooltipEffect();
    }, 1000);
  }, []);

  return (
    <section className="works pt-70 pb-70">
      <h2 style={{display: 'none'}}>&nbsp;</h2>
      <div className="w-100">
            <div className="row lg-space">
              <div className="col-xs-12 col-md-3">
                <div className="card btn-box-shadow">
                  <div className="card-header bg-blue">
                    <h6 className="txt-color-white i18n" data-i18n="providers.location">
                      {t('providers.location')}
                    </h6>
                  </div>
                  <div className="card-body">
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <div className="form-group form-check">
                          <input type="checkbox" className="form-check-input" id="fl-nat" />
                          <label className="form-check-label fs-16 i18n" data-i18n="providers.location_1" htmlFor="fl-nat">
                            {t('providers.location_1')}
                          </label>
                        </div>
                      </li>
                      <li className="nav-item">
                        <div className="form-group form-check">
                          <input type="checkbox" className="form-check-input" id="fl-1" />
                          <label className="form-check-label fs-16 i18n" data-i18n="providers.location_2" htmlFor="fl-1">
                            {t('providers.location_2')}
                          </label>
                        </div>
                      </li>
                      <li className="nav-item">
                        <div className="form-group form-check">
                          <input type="checkbox" className="form-check-input" id="fl-2" />
                          <label className="form-check-label fs-16 i18n" data-i18n="providers.location_3" htmlFor="fl-2">
                            {t('providers.location_3')}
                          </label>
                        </div>
                      </li>
                      <li className="nav-item">
                        <div className="form-group form-check">
                          <input type="checkbox" className="form-check-input" id="fl-3" />
                          <label className="form-check-label fs-16 i18n" data-i18n="providers.location_4" htmlFor="fl-3">
                            {t('providers.location_4')}
                          </label>
                        </div>
                      </li>
                      <li className="nav-item">
                        <div className="form-group form-check">
                          <input type="checkbox" className="form-check-input" id="fl-4" />
                          <label className="form-check-label fs-16 i18n" data-i18n="providers.location_5" htmlFor="fl-4">
                            {t('providers.location_5')}
                          </label>
                        </div>
                      </li>
                      <li className="nav-item">
                        <div className="form-group form-check">
                          <input type="checkbox" className="form-check-input" id="fl-5" />
                          <label className="form-check-label fs-16 i18n" data-i18n="providers.location_6" htmlFor="fl-5">
                            {t('providers.location_6')}
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card btn-box-shadow mt-40">
                  <div className="card-header bg-blue">
                    <h6 className="txt-color-white i18n" data-i18n="providers.types">
                      {t('providers.types')}
                    </h6>
                  </div>
                  <div className="card-body">
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <div className="form-group form-check">
                          <input type="checkbox" className="form-check-input" id="ft-all" />
                          <label className="form-check-label fs-16 i18n" data-i18n="providers.type_all" htmlFor="ft-all">
                            {t('providers.type_all')}
                          </label>
                        </div>
                      </li>
                      <li className="nav-item">
                        <div className="form-group form-check">
                          <input type="checkbox" className="form-check-input" id="ft-1" />
                          <label className="form-check-label fs-16 i18n" data-i18n="providers.type_1" htmlFor="ft-1">
                            {t('providers.type_1')}
                          </label>
                        </div>
                      </li>
                      <li className="nav-item">
                        <div className="form-group form-check">
                          <input type="checkbox" className="form-check-input" id="ft-2" />
                          <label className="form-check-label fs-16 i18n" data-i18n="providers.type_2" htmlFor="ft-2">
                            {t('providers.type_2')}
                          </label>
                        </div>
                      </li>
                      <li className="nav-item">
                        <div className="form-group form-check">
                          <input type="checkbox" className="form-check-input" id="ft-3" />
                          <label className="form-check-label fs-16 i18n" data-i18n="providers.type_3" htmlFor="ft-3">
                            {t('providers.type_3')}
                          </label>
                        </div>
                      </li>
                      <li className="nav-item">
                        <div className="form-group form-check">
                          <input type="checkbox" className="form-check-input" id="ft-4" />
                          <label className="form-check-label fs-16 i18n" data-i18n="providers.type_4" htmlFor="ft-4">
                            {t('providers.type_4')}
                          </label>
                        </div>
                      </li>
                      <li className="nav-item">
                        <div className="form-group form-check">
                          <input type="checkbox" className="form-check-input" id="ft-5" />
                          <label className="form-check-label fs-16 i18n" data-i18n="providers.type_5" htmlFor="ft-5">
                            {t('providers.type_5')}
                          </label>
                        </div>
                      </li>
                      <li className="nav-item">
                        <div className="form-group form-check">
                          <input type="checkbox" className="form-check-input" id="ft-6" />
                          <label className="form-check-label fs-16 i18n" data-i18n="providers.type_6" htmlFor="ft-6">
                            {t('providers.type_6')}
                          </label>
                        </div>
                      </li>
                      <li className="nav-item">
                        <div className="form-group form-check">
                          <input type="checkbox" className="form-check-input" id="ft-7" />
                          <label className="form-check-label fs-16 i18n" data-i18n="providers.type_7" htmlFor="ft-7">
                            {t('providers.type_7')}
                          </label>
                        </div>
                      </li>
                      <li className="nav-item">
                        <div className="form-group form-check">
                          <input type="checkbox" className="form-check-input" id="ft-8" />
                          <label className="form-check-label fs-16 i18n" data-i18n="providers.type_8" htmlFor="ft-8">
                            {t('providers.type_8')}
                          </label>
                        </div>
                      </li>
                      <li className="nav-item">
                        <div className="form-group form-check">
                          <input type="checkbox" className="form-check-input" id="ft-9" />
                          <label className="form-check-label fs-16 i18n" data-i18n="providers.type_9" htmlFor="ft-9">
                            {t('providers.type_9')}
                          </label>
                        </div>
                      </li>
                      <li className="nav-item">
                        <div className="form-group form-check">
                          <input type="checkbox" className="form-check-input" id="ft-10" />
                          <label className="form-check-label fs-16 i18n" data-i18n="providers.type_10" htmlFor="ft-10">
                            {t('providers.type_10')}
                          </label>
                        </div>
                      </li>
                      <li className="nav-item">
                        <div className="form-group form-check">
                          <input type="checkbox" className="form-check-input" id="ft-11" />
                          <label className="form-check-label fs-16 i18n" data-i18n="providers.type_11" htmlFor="ft-11">
                            {t('providers.type_11')}
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-9 row">
                <div className="col-12 mb-4 txt-color-blue i18n" data-i18n="providers.instructions">
                  {t('providers.instructions')}
                </div>
                <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-4">
                  <div className="item wow fadeInUp" data-wow-delay=".3s">
                      <a href="#!" className="show_detail_company">
                          <div className="img" data-tooltip-tit="Bancolombia" data-tooltip-sub="Colombia">
                            <img src="/img/asi/aliados/bancolombia.jpeg" alt="" />
                          </div>
                      </a>
                      <a href="#!" className="show_detail_company mt-2">
                        <h6 className="fs-16 fw-300"><strong className="text-info">Bancolombia</strong> - Colombia</h6>
                        <p className="fs-15">{t('providers.type_1')}</p>
                      </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-4">
                  <div className="item wow fadeInUp" data-wow-delay=".6s">
                    <a href="#!" className="show_detail_company">
                        <div className="img" data-tooltip-tit="Banco de Chile" data-tooltip-sub="Chile">
                          <img src="/img/asi/aliados/banco_chile.jpg" alt="" />
                        </div>
                    </a>
                    <a href="#!" className="show_detail_company mt-2">
                      <h6 className="fs-16 fw-300"><strong className="text-info">Banco de Chile</strong> - Chile</h6>
                      <p className="fs-15">{t('providers.type_2')}</p>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-4">
                  <div className="item wow fadeInUp" data-wow-delay=".9s">
                    <a href="#!" className="show_detail_company">
                      <div className="img" data-tooltip-tit="Banamex" data-tooltip-sub="México">
                        <img src="/img/asi/aliados/banamex.jpg" alt="" className="img-fluid" />
                      </div>
                    </a>
                    <a href="#!" className="show_detail_company mt-2">
                      <h6 className="fs-16 fw-300"><strong className="text-info">Banamex</strong> - México</h6>
                      <p className="fs-15 i18n" data-i18n="providers.type_2">{t('providers.type_3')}</p>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-4">
                  <div className="item wow fadeInUp" data-wow-delay=".3s">
                    <a href="#!" className="show_detail_company">
                      <div className="img" data-tooltip-tit="Bradesco" data-tooltip-sub="Venezuela">
                        <img src="/img/asi/aliados/bradesco.jpg" alt="" />
                      </div>
                    </a>
                    <a href="#!" className="show_detail_company mt-2">
                      <h6 className="fs-16 fw-300"><strong className="text-info">Bradesco</strong> - Venezuela</h6>
                      <p className="fs-15 i18n" data-i18n="providers.type_3">{t('providers.type_4')}</p>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-4">
                  <div className="item wow fadeInUp" data-wow-delay=".6s">
                    <a href="#!" className="show_detail_company">
                      <div className="img" data-tooltip-tit="Santander" data-tooltip-sub="Guatemala">
                        <img src="/img/asi/aliados/santander.jpg" alt="" />
                      </div>
                    </a>
                    <a href="#!" className="show_detail_company mt-2">
                      <h6 className="fs-16 fw-300"><strong className="text-info">Santander</strong> - Guatemala</h6>
                      <p className="fs-15 i18n" data-i18n="providers.type_4">{t('providers.type_5')}</p>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-4">
                    <div className="item wow fadeInUp" data-wow-delay=".9s">
                      <a href="#!" className="show_detail_company">
                        <div className="img" data-tooltip-tit="Banregio" data-tooltip-sub="México">
                          <img src="/img/asi/aliados/banregio.jpg" alt="" />
                        </div>
                      </a>
                      <a href="#!" className="show_detail_company mt-2">
                        <h6 className="fs-16 fw-300"><strong className="text-info">Banregio</strong> - México</h6>
                        <p className="fs-15 i18n" data-i18n="providers.type_5">{t('providers.type_6')}</p>
                      </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-4">
                  <div className="item wow fadeInUp" data-wow-delay=".3s">
                    <a href="#!" className="show_detail_company">
                      <div className="img" data-tooltip-tit="JP Morgan" data-tooltip-sub="USA">
                        <img src="/img/asi/aliados/jpmorgan.jpg" alt="" />
                      </div>
                    </a>
                    <a href="#!" className="show_detail_company mt-2">
                      <h6 className="fs-16 fw-300"><strong className="text-info">JP Morgan</strong> - USA</h6>
                      <p className="fs-15 i18n" data-i18n="providers.type_6">{t('providers.type_7')}</p>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-4">
                    <div className="item wow fadeInUp" data-wow-delay=".6s">
                      <a href="#!" className="show_detail_company">
                        <div className="img" data-tooltip-tit="BBVA" data-tooltip-sub="Perú">
                          <img src="/img/asi/aliados/bbva.jpg" alt="" />
                        </div>
                      </a>
                      <a href="#!" className="show_detail_company mt-2">
                        <h6 className="fs-16 fw-300"><strong className="text-info">BBVA</strong> - Perú</h6>
                        <p className="fs-15  i18n" data-i18n="providers.type_7">{t('providers.type_8')}</p>
                      </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-4">
                    <div className="item wow fadeInUp" data-wow-delay=".9s">
                      <a href="#!" className="show_detail_company">
                        <div className="img" data-tooltip-tit="Fitch Ratings" data-tooltip-sub="El Salvador">
                          <img src="/img/asi/aliados/fitch_ratings.jpg" alt="" />
                        </div>
                      </a>
                      <a href="#!" className="show_detail_company mt-2">
                        <h6 className="fs-16 fw-300"><strong className="text-info">Fitch Ratings</strong> - El Salvador</h6>
                        <p className="fs-15 i18n" data-i18n="providers.type_11">{t('providers.type_9')}</p>
                      </a>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </section>
  );
};

export default AlliesGrid;
