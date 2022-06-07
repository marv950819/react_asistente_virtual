/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import '../../../pages/i18n';

const NewAllDetails = ({ theme }) => {
  const { t } = useTranslation();
  
  return (
    <section className="blog-pg single section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="post">
              <div className="img">
                <img src="/img/asi/inversion.jpg" alt="" />
              </div>
              <div className="content pt-60">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <h4 className="extra-title">
                        {t('news_details.subtitle_1')}
                      </h4>
                      <div className="spacial">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora labore veniam quisquam quasi consectetur fugit minima optio, fuga cupiditate accusantium doloremque nesciunt autem laboriosam sequi rerum corrupti, eveniet placeat beatae?
                        </p>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ab nostrum enim at dignissimos possimus expedita officia veniam tempore, placeat, blanditiis eligendi quam, numquam aspernatur magnam omnis et qui harum!
                      </p>

                      <h6>{t('news_details.subtitle_2')}</h6>

                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex quas veniam deleniti esse beatae ullam impedit placeat quia doloribus eum, perferendis repudiandae est, dolores iure odit officia repellendus eligendi sit?
                      </p>

                      <ul>
                        <li>
                          <span>01</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </li>
                        <li>
                          <span>02</span> Tempora labore veniam quisquam quasi consectetur fugit minima optio.
                        </li>
                        <li>
                          <span>03</span> Fuga cupiditate accusantium doloremque nesciunt autem laboriosam sequi rerum corrupti, eveniet placeat beatae?
                        </li>
                        <li>
                          <span>04</span> Ex quas veniam deleniti esse beatae ullam impedit placeat quia doloribus eum.
                        </li>
                        <li>
                          <span>05</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </li>
                      </ul>

                      <div className="quotes text-center">
                        <p>
                          {t('news_details.phrase')}
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-10">
                            <img src="/img/asi/perfil/woman6.jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-10">
                            <img src="/img/asi/mujer_trabajadora.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad autem maiores fuga facilis debitis in deserunt beatae sapiente amet, aliquid repudiandae deleniti qui error quo ducimus voluptate ea eos dolores.
                      </p>
                      <div className="share-info">
                        <div className="social"></div>
                        <div className="tags">
                          <a href="#0">{t('news_details.category')}</a>,<a href="#0">{t('news_details.category')}</a>,
                          <a href="#0">{t('news_details.category')}p</a>
                        </div>
                      </div>
                    </div>
                    <div className="author">
                      <div className="author-img">
                        <img src="/img/blog/01.jpg" alt="" />
                      </div>
                      <div className="info">
                        <h6>
                          <span>{t('news_details.author')} :</span> {t('news_details.name_author')}
                        </h6>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem molestiae explicabo dolore ullam odio, odit similique velit, itaque quibusdam illo vel porro non recusandae nisi, delectus eos minus quo vero.
                        </p>
                        <div className="social">
                          <a>
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a>
                            <i className="fab fa-twitter"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pagination">
                <span>
                  <a>{t('news_details.last')}</a>
                </span>
                <span className="icon">
                  <Link href={`/news`}>
                    <a>
                      <i className="fas fa-th-large"></i>
                    </a>
                  </Link>
                </span>
                <span className="text-right">
                  <a>{t('news_details.next')}</a>
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewAllDetails;
