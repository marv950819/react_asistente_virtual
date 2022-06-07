import React from "react";
import Link from "next/link";
import { useTranslation } from 'react-i18next';

const News = () => {
  const { t } = useTranslation();

  return (
    <section className="blog-grid section-padding position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h6 className="wow fadeIn i18n" data-i18n="home.news.title" data-wow-delay=".5s">
                {t('home.news.title')}
              </h6>
              <h3 className="wow color-font i18n" data-i18n="home.news.subtitle">
                {t('home.news.subtitle')}
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
            <div
              className="item active bg-img"
              style={{ backgroundImage: "url(/img/asi/inversion.jpg)" }}
            >
              <div className="cont">
                <Link href="/blog/blog-dark">
                  <a className="date">
                    <span><i>22</i> Sep 2022</span>
                  </a>
                </Link>
                <div className="info">
                  <a  className="author">
                    <span className="i18n" data-i18n="home.news.n1_author">{t('home.news.n1_author')}</span>
                  </a>
                  <Link href="/blog/blog-dark">
                    <a className="tag">
                    <span className="i18n" data-i18n="home.news.n1_tag">{t('home.news.n1_tag')}</span>
                    </a>
                  </Link>
                </div>
                <h6>
                  <Link href="/news/new-details">
                    <a href="./new_details" className="i18n" data-i18n="home.news.n1_details">
                      {t('home.news.n1_details')}
                    </a>
                  </Link>
                </h6>
                <div className="btn-more">
                  <Link href="/news/new-details">
                    <a className="simple-btn i18n" data-i18n="home.news.btn_learn_more">
                      {t('home.news.btn_learn_more')}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".6s">
            <div
              className="item active bg-img"
              style={{ backgroundImage: "url(./img/asi/mujer_computadora2.jpg)" }}
            >
              <div className="cont">
                <Link href="/blog/blog-dark">
                  <a className="date">
                    <span><i>17</i> Sep 2022</span>
                  </a>
                </Link>
                <div className="info">
                  <a className="author">
                    <span className="i18n" data-i18n="home.news.n1_author">{t('home.news.n2_author')}</span>
                  </a>
                  <Link href="/blog/blog-dark">
                    <a className="tag">
                    <span className="i18n" data-i18n="home.news.n1_tag">{t('home.news.n2_tag')}</span>
                    </a>
                  </Link>
                </div>
                <h6>
                  <Link href="/news/new-details">
                    <a href="./new_details" className="i18n" data-i18n="home.news.n2_details">
                      {t('home.news.n2_details')}
                    </a>
                  </Link>
                </h6>
                <div className="btn-more">
                  <Link href="/news/new-details">
                    <a className="simple-btn i18n" data-i18n="home.news.btn_learn_more">
                      {t('home.news.btn_learn_more')}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".9s">
            <div
              className="item active bg-img"
              style={{ backgroundImage: "url(./img/asi/inversion3.jpg)" }}
            >
              <div className="cont">
                <Link href="/blog/blog-dark">
                  <a href="#!" className="date">
                      <span><i>01</i> Sep 2022</span>
                  </a>
                </Link>
                <div className="info">
                  <a className="author">
                    <span className="i18n" data-i18n="home.news.n1_author">{t('home.news.n3_author')}</span>
                  </a>
                  <Link href="/blog/blog-dark">
                    <a className="tag">
                    <span className="i18n" data-i18n="home.news.n1_tag">{t('home.news.n3_tag')}</span>
                    </a>
                  </Link>
                </div>
                <h6>
                  <Link href="/news/new-details">
                    <a className="i18n" data-i18n="home.news.n3_details">
                      {t('home.news.n3_details')}
                    </a>
                  </Link>
                </h6>
                <div className="btn-more">
                  <Link href="/news/new-details">
                    <a className="simple-btn i18n" data-i18n="home.news.btn_learn_more">
                      {t('home.news.btn_learn_more')}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line top right"></div>
      <div className="line bottom left"></div>
    </section>
  );
};

export default News;
