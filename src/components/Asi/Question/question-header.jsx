/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import teamSkillsProgress from "../../../common/teamSkillsProgress";
import tooltipEffect from "../../../common/tooltipEffect";

const QuestionHeader = ({progress}) => {
  const { t } = useTranslation();
  React.useEffect(() => {
    teamSkillsProgress()
    setTimeout(() => {
      tooltipEffect()
    }, 1000);
  }, []);

  return (
    <header className="team-crv question-header-padding mt-20">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="content wow fadeInUp mb-0" data-wow-delay=".5s">
              <h6 className="fw-500 txt-color-secondary w-100">{t('questions.subtitle')}</h6>
              <h5 className="co-tit mb-15">
                <span className="txt-color-blue">{t('questions.section')}</span> <span>{t('questions.section_1')}</span>
              </h5>
              <div className="w-100 mt-20 mb-0">
                <div className="skill-item">
                  <h6 className="custom-font fw-300 mb-2">
                    <span>{t('questions.progress_section')}</span>
                    <strong className="txt-color-three"> {progress}%</strong>
                  </h6>
                  <ProgressBar styped="true" animated variant="info" className='sz-progressbar' now={progress} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default QuestionHeader;