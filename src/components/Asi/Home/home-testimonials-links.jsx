/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Split from "../../Split";
import { useTranslation } from 'react-i18next';

const TestimonialsLinks = ({ theme }) => {
  const { t } = useTranslation();
  return (
    <section className="clients sub-bg pt-50 pb-50">
      <h2 style={{ display: "none" }}>&nbsp;</h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="row">
              
              <div className="col-lg-3 brands">
                <div className="item no-bord wow fadeIn" data-wow-delay=".3s">
                  <div className="img">
                    <img src="/img/asi/icons/identidad.png" alt="" />
                    <Split>
                      <Link href={`/register`}>
                        <a
                          className="link words chars splitting"
                          data-splitting>
                          <a className="link">{t('home.testimonials.register')}</a>
                        </a>
                      </Link>
                    </Split>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 brands">
                <div className="item no-bord wow fadeIn" data-wow-delay=".3s">
                  <div className="img">
                    <img src="/img/asi/icons/idea.png" alt="" />
                    <Split>
                      <Link href={`/help-resources`}>
                        <a
                          className="link words chars splitting"
                          data-splitting>
                          <a className="link">{t('home.testimonials.help_center')}</a>
                        </a>
                      </Link>
                    </Split>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 brands">
                <div className="item no-bord wow fadeIn" data-wow-delay=".3s">
                  <div className="img">
                    <img src="/img/asi/icons/edificio.png" alt="" />
                    <Split>
                      <Link href={`/allies`}>
                        <a
                          className="link words chars splitting"
                          data-splitting>
                          <a className="link">{t('home.testimonials.providers')}</a>
                        </a>
                      </Link>
                    </Split>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 brands">
                <div className="item no-bord wow fadeIn" data-wow-delay=".3s">
                  <div className="img">
                    <img src="/img/asi/icons/cuaderno.png" alt="" />
                    <Split>
                      <Link href={`/news`}>
                        <a
                          className="link words chars splitting"
                          data-splitting>
                          <a className="link">{t('home.testimonials.news')}</a>
                        </a>
                      </Link>
                    </Split>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsLinks;
