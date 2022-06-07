import React from "react";
import fadeWhenScroll from "../../../common/fadeWhenScroll";
import { useTranslation } from 'react-i18next';

const AlliesHeader = ({ sliderRef }) => {
  const { t } = useTranslation();

  React.useEffect(() => {
    fadeWhenScroll(document.querySelectorAll(".fixed-slider .capt .parlx"));
  }, []);
  return (
    <header
      ref={sliderRef}
      className="works-header fixed-slider hfixd valign sub-bg"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-9 static">
            <div className="capt mt-50">
              <div className="parlx text-center">
                <h1 className="color-font mb-10 fw-700 i18n" data-i18n="providers.title">
                  {t('providers.title')}
                </h1>
                <p className="i18n" data-i18n="providers.description">
                  {t('providers.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AlliesHeader;
