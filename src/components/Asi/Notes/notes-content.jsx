/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useTranslation } from 'react-i18next';

import { Tab, Tabs, TabContent } from 'react-bootstrap';
import '../../../pages/i18n';

const NotesContent = ({ theme }) => {
  const { t } = useTranslation();
  
  return (
    <section className="contact-sec style2 section-padding position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-12">
            <h4 className="wow txt-color-blue mt-4 i18n" data-i18n="notes.subtitle">{t('notes.subtitle')}</h4>
          </div>
          <div className="col-lg-3 col-md-12">
            <a id="btn_create_reminder" className="butn dark curve mt-30 btn-box-shadow">
              <span className="i18n txt-color-white" data-i18n="notes.btn_create_reminder">{t('notes.btn_create_reminder')}</span>
            </a>
          </div>
          <div className="col-lg-2 col-md-12">
            <a id="btn_create_note" className="butn dark curve mt-30 btn-box-shadow">
              <span className="i18n txt-color-white" data-i18n="notes.btn_create_note">{t('notes.btn_create_note')}</span>
            </a>
          </div>
        </div>
        <div className="row justify-content-center mt-30">
            <div className="col-lg-11 col-md-12">

            <Tabs
              defaultActiveKey="all"
              transition={false}
              id="noanim-tab-example"
              className="mb-3"
            >
              <Tab eventKey="all" title={t('notes.filter_all')} className="nav-link">
                <TabContent>
                <p className="mt-3 fs-14 i18n" data-i18n="notes.inst_section">A continuación, se muestran todas las notas y recordatorios que has registrado.</p>
                <section className="services box mt-4">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-4 wow fadeInLeft" data-wow-delay=".5s">
                          <div className="item-box md-mb50">
                            <h5 className="text-left txt-color-blue i18n" data-i18n="notes.note">Nota:</h5>
                            <img src="/img/asi/icons/idea.png" alt="" className="mt-4 w-70p" />
                            <h6 className="mt-4 i18n" data-i18n="notes.example_1">Cargar información</h6>
                            <p className="text-justify fs-14">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque iure porro harum! Voluptatem modi reprehenderit, natus inventore earum.</p>
                            <p className="mt-4 text-white">-</p>
                            <div className="w-100 d-flex justify-content-between mt-4">
                              <button type="button" className="btn btn-light btn-sm fs-16 btn-box-shadow" data-tooltip-sub="Eliminar">
                                <span className="pe-7s-trash"></span>
                              </button>
                              <button type="button" className="btn btn-light btn-sm fs-16 btn-box-shadow" data-tooltip-sub="Actualizar">
                                <span className="pe-7s-note"></span>
                              </button>
                              <button type="button" className="btn btn-light btn-sm fs-16 btn-box-shadow" data-tooltip-sub="Marcar como completada">
                                <span className="pe-7s-check"></span>
                              </button>
                            </div>
                          </div>
                      </div>
                      <div className="col-lg-4 wow fadeInLeft" data-wow-delay=".7s">
                          <div className="item-box md-mb50">
                            <h5 className="text-left txt-color-blue i18n" data-i18n="notes.reminder">Recordatorio:</h5>
                            <img src="/img/asi/icons/telefono.png" alt="" className="mt-4 w-70p" />
                            <h6 className="mt-4  i18n" data-i18n="notes.example_2">Retomar examen</h6>
                            <p className="text-justify fs-14">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque iure porro harum! Voluptatem modi reprehenderit, natus inventore earum.</p>
                            <p className="mt-4 txt-color-black fw-600">18/11/2022 16:40</p>
                            <div className="w-100 d-flex justify-content-between mt-4">
                              <button type="button" className="btn btn-light btn-sm fs-16 btn-box-shadow" data-tooltip-sub="Eliminar">
                                <span className="pe-7s-trash"></span>
                              </button>
                              <button type="button" className="btn btn-light btn-sm fs-16 btn-box-shadow" data-tooltip-sub="Actualizar">
                                <span className="pe-7s-note"></span>
                              </button>
                              <button type="button" className="btn btn-light btn-sm fs-16 btn-box-shadow" data-tooltip-sub="Marcar como completada">
                                <span className="pe-7s-check"></span>
                              </button>
                            </div>
                          </div>
                      </div>
                      <div className="col-lg-4 wow fadeInLeft" data-wow-delay=".9s">
                        <div className="item-box md-mb50">
                          <h5 className="text-left txt-color-blue i18n" data-i18n="notes.note">Nota:</h5>
                          <img src="/img/asi/icons/idea.png" alt="" className="mt-4 w-70p" />
                          <h6 className="mt-4  i18n" data-i18n="notes.example_3">Buscar financiera</h6>
                          <p className="text-justify fs-14">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque iure porro harum! Voluptatem modi reprehenderit, natus inventore earum.</p>
                          <p className="mt-4 text-white">-</p>
                          <div className="w-100 d-flex justify-content-between mt-4">
                            <button type="button" className="btn btn-light btn-sm fs-16 btn-box-shadow" data-tooltip-sub="Eliminar">
                              <span className="pe-7s-trash"></span>
                            </button>
                            <button type="button" className="btn btn-light btn-sm fs-16 btn-box-shadow" data-tooltip-sub="Actualizar">
                              <span className="pe-7s-note"></span>
                            </button>
                            <button type="button" className="btn btn-light btn-sm fs-16 btn-box-shadow" data-tooltip-sub="Marcar como completada">
                              <span className="pe-7s-check"></span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                </TabContent>
              </Tab>
              <Tab eventKey="notes" title={t('notes.filter_notes')} className="nav-link">
                <TabContent>
                <p className="mt-3 fs-14 txt-color-black i18n" data-i18n="notes.desc_notes">A continuación, se muestran las notas que has registrado.</p>
                <section className="services box mt-4">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-4 wow fadeInLeft" data-wow-delay=".1s">
                          <div className="item-box md-mb50">
                            <h5 className="text-left txt-color-blue i18n" data-i18n="notes.note">Nota:</h5>
                            <img src="/img/asi/icons/idea.png" alt="" className="mt-4 w-70p" />
                            <h6 className="mt-4  i18n" data-i18n="notes.example_1">Cargar información</h6>
                            <p className="text-justify fs-14">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque iure porro harum! Voluptatem modi reprehenderit, natus inventore earum.</p>
                            <p className="mt-4 text-white">-</p>
                            <div className="w-100 d-flex justify-content-between mt-4">
                              <button type="button" className="btn btn-light btn-sm fs-16 btn-box-shadow" data-tooltip-sub="Eliminar">
                                <span className="pe-7s-trash"></span>
                              </button>
                              <button type="button" className="btn btn-light btn-sm fs-16 btn-box-shadow" data-tooltip-sub="Actualizar">
                                <span className="pe-7s-note"></span>
                              </button>
                              <button type="button" className="btn btn-light btn-sm fs-16 btn-box-shadow" data-tooltip-sub="Marcar como completada">
                                <span className="pe-7s-check"></span>
                              </button>
                            </div>
                          </div>
                      </div>
                      <div className="col-lg-4 wow fadeInLeft" data-wow-delay=".2s">
                        <div className="item-box md-mb50">
                          <h5 className="text-left txt-color-blue i18n" data-i18n="notes.note">Nota:</h5>
                          <img src="/img/asi/icons/idea.png" alt="" className="mt-4 w-70p" />
                          <h6 className="mt-4  i18n" data-i18n="notes.example_3">Buscar financiera</h6>
                          <p className="text-justify fs-14">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque iure porro harum! Voluptatem modi reprehenderit, natus inventore earum.</p>
                          <p className="mt-4 text-white">-</p>
                          <div className="w-100 d-flex justify-content-between mt-4">
                            <button type="button" className="btn btn-light btn-sm fs-16 btn-box-shadow" data-tooltip-sub="Eliminar">
                              <span className="pe-7s-trash"></span>
                            </button>
                            <button type="button" className="btn btn-light btn-sm fs-16 btn-box-shadow" data-tooltip-sub="Actualizar">
                              <span className="pe-7s-note"></span>
                            </button>
                            <button type="button" className="btn btn-light btn-sm fs-16 btn-box-shadow" data-tooltip-sub="Marcar como completada">
                              <span className="pe-7s-check"></span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                </TabContent>
              </Tab>
              <Tab eventKey="reminders" title={t('notes.filter_reminders')}>
                <TabContent>
                <p className="mt-3 fs-14 txt-color-black i18n" data-i18n="notes.desc_reminders">A continuación, se muestran los recordatorios que has registrado.</p>

                <section className="services box mt-4">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-4 wow fadeInLeft" data-wow-delay=".1s">
                          <div className="item-box md-mb50">
                            <h5 className="text-left txt-color-blue i18n" data-i18n="notes.reminder">Recordatorio:</h5>
                            <img src="/img/asi/icons/telefono.png" alt="" className="mt-4 w-70p" />
                            <h6 className="mt-4  i18n" data-i18n="notes.example_2">Retomar examen</h6>
                            <p className="text-justify fs-14">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque iure porro harum! Voluptatem modi reprehenderit, natus inventore earum.</p>
                            <p className="mt-4 txt-color-black fw-600">18/11/2022 16:40</p>
                            <div className="w-100 d-flex justify-content-between mt-4">
                              <button type="button" className="btn btn-light btn-sm fs-16 btn-box-shadow" data-tooltip-sub="Eliminar">
                                <span className="pe-7s-trash"></span>
                              </button>
                              <button type="button" className="btn btn-light btn-sm fs-16 btn-box-shadow" data-tooltip-sub="Actualizar">
                                <span className="pe-7s-note"></span>
                              </button>
                              <button type="button" className="btn btn-light btn-sm fs-16 btn-box-shadow" data-tooltip-sub="Marcar como completada">
                                <span className="pe-7s-check"></span>
                              </button>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </section>
                </TabContent>
              </Tab>
            </Tabs>

          </div>
        </div>
      </div>
    </section>
  );
};

export default NotesContent;