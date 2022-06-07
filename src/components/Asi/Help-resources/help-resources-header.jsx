import React from "react";
import fadeWhenScroll from "../../../common/fadeWhenScroll";
import { useTranslation } from 'react-i18next';

const ResourcesHeader = ({ sliderRef }) => {
  const { t } = useTranslation();

  React.useEffect(() => {
    fadeWhenScroll(document.querySelectorAll(".fixed-slider .capt .parlx"));
  }, []);
  return (
    <header
      ref={sliderRef}
      className="works-header fixed-slider bg-img hfixd parallaxie valign bg-help-resources" data-overlay-dark="4"
    >
      <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-12">
                <div className="cont">
                    <h6 className="i18n" data-i18n="help_resources.subtitle">
                      {t('help_resources.subtitle')}
                    </h6>
                    <h1 className="color-font i18n" data-i18n="help_resources.title">
                      {t('help_resources.title')}
                    </h1>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
              <p className="fs-18 fw-500 txt-color-white i18n" data-i18n="help_resources.description">
                {t('help_resources.description')}
              </p>
            </div>
        </div>
      </div>
    </header>
  );
};

export default ResourcesHeader;
