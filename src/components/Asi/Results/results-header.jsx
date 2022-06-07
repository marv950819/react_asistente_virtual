/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useTranslation } from 'react-i18next';

const ResultsHeader = () => {
  const { t } = useTranslation();

  return (
    <header className="page-header proj-det bg-img parallaxie valign bg-results" data-overlay-dark="2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-11">
            <div className="capt">
              <div className="text-center">
                <h1 className="mb-10 fw-700 color-font">
                  {t('results.title')}
                </h1>
                <p className='fw-400 fs-18 txt-color-white'>
                  {t('results.instructions')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default ResultsHeader;