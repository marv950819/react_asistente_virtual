/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    console.clear();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="block-sec">
      <div
        className="background bg-img pt-100 pb-0 parallaxie"
        style={{ backgroundImage: `url(/img/asi/uns/3.jpg)` }}
        data-overlay-dark="5"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="vid-area">
                <span className="text">{t('home.testimonials.show_video')}</span>
                <div className="vid-icon">
                  {typeof window !== "undefined" && (
                    <ModalVideo
                      channel="youtube"
                      isOpen={isOpen}
                      videoId="VscZXY6TldA"
                      onClose={() => setOpen(false)}
                    />
                  )}
                  <a
                    className="vid"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(true);
                    }}
                  >
                    <div className="vid-butn">
                      <span className="icon">
                        <i className="fas fa-play"></i>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="testim-box">
                <div className="head-box">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    {t('home.testimonials.subtitle')}
                  </h6>
                  <h4 className="wow fadeInLeft" data-wow-delay=".5s">
                    {t('home.testimonials.title')}
                  </h4>
                </div>
                <Slider
                  {...settings}
                  className="slic-item wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="item">
                    <p className="i18n" data-i18n="home.testimonials.testimony1">
                      {t('home.testimonials.testimony1')}
                    </p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box">
                          <img src="/img/asi/perfil/cube/woman6.jpg" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name ">Alicia Gómez</h6>
                          <span className="author-details">
                            {t('home.testimonials.testimony1_job')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <p className="i18n" data-i18n="home.testimonials.testimony2">
                      {t('home.testimonials.testimony2')}
                    </p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box">
                          <img src="/img/asi/perfil/cube/woman5.jpg" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name">Luz Martínez</h6>
                          <span className="author-details">
                            {t('home.testimonials.testimony2_job')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <p className="i18n" data-i18n="home.testimonials.testimony3">
                      {t('home.testimonials.testimony3')}
                    </p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box">
                          <img src="/img/asi/perfil/cube/woman2.jpg" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name ">Ana López</h6>
                          <span className="author-details">
                            {t('home.testimonials.testimony3_job')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;