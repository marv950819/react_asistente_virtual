import React from 'react'
import Split from '../../Split'
import Link from 'next/link'
import { useTranslation } from 'react-i18next';

const CallToAction = ({img}) => {
    const { t } = useTranslation();
    return (
      <section
        className="call-action section-padding sub-bg bg-img"
        style={{ backgroundImage: `url(${img ? img : "/img/patrn.svg"})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9">
              <div className="content sm-mb30">
                <Split>
                  <h6 className="wow words chars splitting i18n" data-i18n="home.action.title" data-splitting>
                    {t('home.action.title')}
                  </h6>
                  <h2 className="wow words chars splitting i18n mb-0" data-i18n="home.action.txt_1" data-splitting >
                    {t('home.action.txt_1')}
                  </h2>
                  <h2 className="wow" data-splitting>
                    <b className="back-color i18n" data-i18n="home.action.txt_2">
                      {t('home.action.txt_2')}
                    </b>
                  </h2>
                </Split>
              </div>
            </div>

            <div className="col-md-4 col-lg-3 valign">
              <Link
                href={`/register`}
              >
                <a
                  className="butn dark bord curve wow fadeInUp btn-box-shadow"
                  data-wow-delay=".5s"
                >
                  <span className="i18n" data-i18n="home.action.btn_register">
                    {t('home.action.btn_register')}
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
}

export default CallToAction