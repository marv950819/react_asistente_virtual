import React from "react";
import { useTranslation } from 'react-i18next';

const ProjectIntroduction = ({ projectIntroductionData }) => {
  const { t } = useTranslation();

  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit">
              <h4>
                <span>01 </span> {t('project_details.subtitle_2')}
              </h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text js-scroll__content">
              <p className="extra-text">
                {t('project_details.text_1')}
              </p>
              <ul className="smp-list mt-30"></ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectIntroduction;
