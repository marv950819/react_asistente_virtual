/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useTranslation } from 'react-i18next';

const ProfileHeader = () => {
  const { t, i18n } = useTranslation();

  return (
    <header className={`page-header circle-bg valign position-re sub-bg padding-profile`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-11">
            <div className="capt">
              <div className="text-center">
                <h1 className="mb-10 fw-700 color-font">
                  {t('profile.title')}
                </h1>
                <p>
                  <span className="i18n" data-i18n="profile.txt_inst_1">{t('profile.txt_inst_1')}</span> 
                  <strong className="txt-color-black i18n" data-i18n="profile.txt_inst_2">{t('profile.txt_inst_2')}</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default ProfileHeader;