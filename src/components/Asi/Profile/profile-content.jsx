/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useTranslation } from 'react-i18next';
import '../../../pages/i18n';

const ProfileForm = ({ theme }) => {
  const { t } = useTranslation();
  
  return (
    <section className="contact-sec style2 section-padding position-re">
      <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="sec-head text-left margin-head-dashboard">
                <h6 className="wow fadeIn" data-wow-delay=".5s">María González</h6>
                <h4 className="wow txt-color-blue i18n" data-i18n="profile.subtitle">{t('profile.subtitle')}</h4>
              </div>
            </div>
            <div className="col-2">
              <img src="/img/asi/profile.jpg" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="row justify-content-center mt-30">
              <div className="col-lg-10">
                <div className="form wow fadeInUp" data-wow-delay=".5s">
                  <form id="contact-form" >
                    <div className="controls">
                      <div className="row">
                        <div className="col-12 mb-30">
                          <span className="i18n" data-i18n="profile.inst_upd">{t('profile.inst_upd')}</span>
                          <strong className="i18n" data-i18n="profile.btn_save">{t('profile.btn_save')}</strong>.
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="form-group">
                              <label htmlFor="form_name" className="i18n" data-i18n="profile.form_name">{t('profile.form_name')}</label>
                              <input id="form_name" type="text" name="name" required="required" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="form-group">
                              <label htmlFor="form_lastname" className="i18n" data-i18n="profile.form_lastname">{t('profile.form_lastname')}</label>
                              <input id="form_lastname" type="text" name="lastname" required="required" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="form_email" className="i18n" data-i18n="profile.form_email">{t('profile.form_email')}</label>
                            <input id="form_email" type="email" name="email" required="required" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="form_pass" className="i18n" data-i18n="profile.form_pass">{t('profile.form_pass')}</label>
                            <input id="form_pass" type="password" name="pass" required="required" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="form_phone" className="i18n" data-i18n="profile.form_phone">{t('profile.form_phone')}</label>
                            <input id="form_phone" type="text" name="phone" required="required" />
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="form-group">
                            <label htmlFor="form_mobile" className="i18n" data-i18n="profile.form_mobile">{t('profile.form_mobile')}</label>
                            <input id="form_mobile" type="text" name="mobile" required="required" />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <label htmlFor="form_company" className="i18n" data-i18n="profile.form_company">{t('profile.form_company')}</label>
                            <input id="form_company" type="text" name="company" required="required" />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <label htmlFor="form_message" className="i18n" data-i18n="profile.form_message">{t('profile.form_message')}</label>
                            <textarea id="form_message" name="message" rows="4" required="required"></textarea>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <label htmlFor="form_image" className="i18n" data-i18n="profile.form_image">{t('profile.form_image')}</label>
                            <input id="form_image" type="file" name="imagen" required="required" />
                          </div>
                        </div>
                        <div className="col-12 mt-3 mb-3">
                          <h5 className="wow txt-color-blue i18n" data-i18n="address">{t('profile.address')}</h5>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label htmlFor="form_cp" className="i18n" data-i18n="profile.form_cp">{t('profile.form_cp')}</label>
                            <input id="form_cp" type="number" name="cp" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                          <div className="form-group">
                            <label htmlFor="form_country" className="i18n" data-i18n="profile.form_country">{t('profile.form_country')}</label>
                            <input id="form_country" type="text" name="country" required="required" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label htmlFor="form_state" className="i18n" data-i18n="profile.form_state">{t('profile.form_state')}</label>
                            <input id="form_state" type="text" name="state_address" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label htmlFor="form_city" className="i18n" data-i18n="profile.form_city">{t('profile.form_city')}</label>
                            <input id="form_city" type="text" name="city" />
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-12">
                          <div className="form-group">
                            <label htmlFor="form_street" className="i18n" data-i18n="profile.form_street">{t('profile.form_street')}</label>
                            <input id="form_street" type="text" name="street" />
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                          <div className="form-group">
                            <label htmlFor="form_num_ext" className="i18n" data-i18n="profile.form_num_ext">{t('profile.form_num_ext')}</label>
                            <input id="form_num_ext" type="text" name="num_ext" placeholder="#" />
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                          <div className="form-group">
                            <label htmlFor="form_num_int" className="i18n" data-i18n="profile.form_num_int">{t('profile.form_num_int')}</label>
                            <input id="form_num_int" type="text" name="num_int" placeholder="#" />
                          </div>
                        </div>
                        <div className="col-12 mt-4">
                          <div className="text-right">
                              <a href="#0" className="butn dark curve mt-30 btn-box-shadow">
                                <span className="i18n" data-i18n="profile.btn_save">{t('profile.btn_save')}</span>
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
    </section>
  );
};

export default ProfileForm;