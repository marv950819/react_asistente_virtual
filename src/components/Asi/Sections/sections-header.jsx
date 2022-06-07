/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import teamSkillsProgress from "../../../common/teamSkillsProgress";
import tooltipEffect from "../../../common/tooltipEffect";

const NotesHeader = () => {
  const { t } = useTranslation();
  React.useEffect(() => {
    teamSkillsProgress()
    setTimeout(() => {
      tooltipEffect()
    }, 1000);
  }, []);

  return (
    <header className="team-crv section-padding-md mt-20">
      <div className="container">
        <div className="row">
          <div className="col-12 ">
            <div className="content md-mb50">
                <div className="">
                  <h6 className="fw-300 txt-color-blue">María González</h6>
                </div>
                <h3 className="co-tit mb-15">{t('evaluation.title')}</h3>
                <p className="txt-color-black">
                  {t('evaluation.instructions')}
                </p>
                <div className="skills-box mt-40">
                  <div className="skill-item">
                    <h6 className="custom-font">
                      {t('evaluation.general_progress')}
                    </h6>
                    <div className="skill-progress wow fadeIn">
                      <div className="progres" data-value="61%"></div>
                    </div>
                  </div>
                </div>
                <div className="w-100 mt-30 mb-20 d-flex justify-content-between">
                <Link href={'/question/true_false'}>
                  <a href="question_true_false.html"  className="butn dark curve wow fadeInUp btn-box-shadow" data-wow-delay=".5s">
                    <span>{t('evaluation.btn_start_evaluation')}</span>
                  </a>
                  </Link>
                  <Link href={'/help-resources'}>
                    <a target="_blank" rel="noopener noreferrer" className="butn light curve wow fadeInUp btn-box-shadow ml-20" data-wow-delay=".5s">
                      <span>
                        {t('evaluation.btn_help')}
                      </span>
                    </a>
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NotesHeader;