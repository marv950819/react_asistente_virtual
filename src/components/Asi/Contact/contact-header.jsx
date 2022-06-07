import React from "react";
import particlesConfig from "../../../config/particle-config";
import particlesBlackConfig from "../../../config/pr-s-black";
import Particles from "react-tsparticles";
import { useTranslation } from 'react-i18next';

const ContactHeader = ({ sliderRef, blackStar }) => {
  const { t } = useTranslation();
  return (
    <header
      ref={sliderRef}
      className="pages-header circle-bg valign position-re"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-11">
            <div className="capt">
              <div className="text-center">
                <h1 className="color-font mb-10 fw-700 i18n" data-i18n="contact.title">
                  {t('contact.title')}
                </h1>
                <p className="i18n" data-i18n="contact.description">
                  {t('contact.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Particles
        id="particles-js"
        options={blackStar ? particlesBlackConfig : particlesConfig}
      />

      <div className="circle-color">
        <div className="gradient-circle"></div>
        <div className="gradient-circle two"></div>
      </div>
    </header>
  );
};

export default ContactHeader;
