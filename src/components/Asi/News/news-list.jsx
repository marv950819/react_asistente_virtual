/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useTranslation } from 'react-i18next';

const NewsList = ({ blogs }) => {
  const { t } = useTranslation();
  return (
    <section className="blog-pg blog-list section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="posts mt-80">
              
                <div
                  className="item mb-80 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="row">
                    <div className="col-lg-6 valign">
                      <div className="img md-mb50">
                        <img src="/img/asi/mujer_emprendedora.jpg" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6 valign">
                      <div className="cont">
                        <div>
                          <div className="info">
                            <Link href="/news/new-details/">
                              <a className="date">
                                <span>
                                  <span><i>31</i> September</span>
                                </span>
                              </a>
                            </Link>
                            <span>/</span>
                            <Link key={1} href="/news/new-details/">
                              <a className="tag">
                                <span>{t('news.new_category')}</span>
                              </a>
                            </Link>
                          </div>
                          <h5>
                          <Link href="/news/new-details/">
                              <a>{t('news.new_title')}</a>
                            </Link>
                          </h5>
                          <p className="mt-10">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius at provident dolores similique perferendis pariatur vero nulla animi, hic necessitatibus eaque fuga labore soluta amet voluptatem tempora officia sequi corrupti?
                          </p>
                          <div className="btn-more mt-30">
                            <Link href="/news/new-details/">
                              <a className="simple-btn i18n" data-i18n="news.btn_learn">
                                {t('news.btn_learn')}
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="item mb-80 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="row">
                    <div className="col-lg-6 valign">
                      <div className="img md-mb50">
                        <img src="/img/asi/home.jpg" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6 valign">
                      <div className="cont">
                        <div>
                          <div className="info">
                            <Link href="/news/new-details/">
                              <a className="date">
                                <span>
                                  <span><i>16</i> September</span>
                                </span>
                              </a>
                            </Link>
                            <span>/</span>
                            <Link key={2} href="/news/new-details/">
                              <a className="tag">
                                <span>{t('news.new_category')}</span>
                              </a>
                            </Link>
                          </div>
                          <h5>
                          <Link href="/news/new-details/">
                              <a>{t('news.new_title')}</a>
                            </Link>
                          </h5>
                          <p className="mt-10">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius at provident dolores similique perferendis pariatur vero nulla animi, hic necessitatibus eaque fuga labore soluta amet voluptatem tempora officia sequi corrupti?
                          </p>
                          <div className="btn-more mt-30">
                            <Link href="/news/new-details/">
                              <a className="simple-btn i18n" data-i18n="news.btn_learn">
                                {t('news.btn_learn')}
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="item mb-80 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="row">
                    <div className="col-lg-6 valign">
                      <div className="img md-mb50">
                        <img src="/img/asi/inversion3.jpg" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6 valign">
                      <div className="cont">
                        <div>
                          <div className="info">
                            <Link href="/news/new-details/">
                              <a className="date">
                                <span>
                                  <span><i>01</i> September</span>
                                </span>
                              </a>
                            </Link>
                            <span>/</span>
                            <Link key={3} href="/news/new-details/">
                              <a className="tag">
                                <span>{t('news.new_category')}</span>
                              </a>
                            </Link>
                          </div>
                          <h5>
                          <Link href="/news/new-details/">
                              <a>{t('news.new_title')}</a>
                            </Link>
                          </h5>
                          <p className="mt-10">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius at provident dolores similique perferendis pariatur vero nulla animi, hic necessitatibus eaque fuga labore soluta amet voluptatem tempora officia sequi corrupti?
                          </p>
                          <div className="btn-more mt-30">
                            <Link href="/news/new-details/">
                              <a className="simple-btn i18n" data-i18n="news.btn_learn">
                                {t('news.btn_learn')}
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              <div className="pagination">
                <span className="active">
                  <Link href={`/news`}>1</Link>
                </span>
                <span>
                  <Link href={`/news`}>2</Link>
                </span>
                <span>
                  <Link href={`/news`}>
                    <a>
                      <i className="fas fa-angle-right"></i>
                    </a>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsList;
