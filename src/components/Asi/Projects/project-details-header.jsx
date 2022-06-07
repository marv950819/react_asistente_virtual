import React from "react";
import Link from "next/link";
import { useTranslation } from 'react-i18next';

const ProjectDetails2Header = ({ projectHeaderData }) => {
  const { t } = useTranslation();
  return (
    <section
      className="page-header proj-det bg-img parallaxie valign"
      style={{ backgroundImage: `url(/img/dfc/caso1.png)` }}
      data-overlay-dark="4"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-9">
            <div className="cont">
              <h6>{t('project_details.subtitle')}</h6>
              <h2>{t('project_details.title')}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <div className="item mt-30">
              <h6>{t('project_details.location')}</h6>
              <p>
                <Link href="/">
                  <a>{t('project_details.tmp_location')}</a>
                </Link>
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="item mt-30">
              <h6>{t('project_details.region')}</h6>
              <p>{t('project_details.tmp_region')}</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="item mt-30">
              <h6>{t('project_details.category')}</h6>
              <p>
                <Link href="/">
                  <a>
                  {t('project_details.tmp_category')}
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails2Header;
