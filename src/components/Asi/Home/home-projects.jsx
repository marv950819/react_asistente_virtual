import React from "react";
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Projects = () => {
  const { t } = useTranslation();
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
  }, [pageLoaded]);
  return (
    <section className="work-carousel metro position-re">
      <div className="container-fluid">
        <div className="row justify-content-center mt-40">
          <div className="col-lg-10 col-md-12">
              <div className="sec-head  text-center">
                  <h6 className="wow fadeIn i18n" data-i18n="home.projects.subtitle" data-wow-delay=".5s">
                    {t('home.projects.subtitle')}
                  </h6>
                  <h3 className="wow txt-color-blue i18n" data-i18n="home.projects.title">
                    {t('home.projects.title')}
                  </h3>
              </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 no-padding">

            <div className="swiper-container">
              <Swiper
                className="swiper-wrapper"
                slidesPerView={2}
                centeredSlides={true}
                loop={true}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                onSwiper={(swiper) => {
                  setTimeout(() => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;

                    swiper.navigation.destroy();
                    swiper.navigation.init();
                    swiper.navigation.update();
                  });
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                speed={1000}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  767: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  991: {
                    slidesPerView: 2,
                  },
                }}
              >
                <SwiperSlide className="swiper-slide" key={1}>
                  <div
                    className="content wow noraidus fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div
                      className="item-img bg-img wow imago"
                      style={{ backgroundImage: `url(/img/dfc/caso1.png)` }}
                    />
                    <div className="cont">
                      <h6 className="color-font">
                        <a href="#0">{t('home.projects.project_1_program')}</a>
                      </h6>
                      <h4>
                        <Link
                          href={`/project-details/`}
                        >
                          {t('home.projects.project_1')}
                        </Link>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide" key={2}>
                  <div
                    className="content wow noraidus fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div
                      className="item-img bg-img wow imago"
                      style={{ backgroundImage: `url(/img/dfc/caso2.png)` }}
                    />
                    <div className="cont">
                      <h6 className="color-font">
                        <a href="#0">{t('home.projects.project_2_program')}</a>
                      </h6>
                      <h4>
                        <Link
                          href={`/project-details/`}
                        >
                          {t('home.projects.project_2')}
                        </Link>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide" key={3}>
                  <div
                    className="content wow noraidus fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div
                      className="item-img bg-img wow imago"
                      style={{ backgroundImage: `url(/img/dfc/caso3.jpg)` }}
                    />
                    <div className="cont">
                      <h6 className="color-font">
                        <a href="#0">{t('home.projects.project_3_program')}</a>
                      </h6>
                      <h4>
                        <Link
                          href={`/project-details/`}
                        >
                          {t('home.projects.project_3')}
                        </Link>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide" key={4}>
                  <div
                    className="content wow noraidus fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div
                      className="item-img bg-img wow imago"
                      style={{ backgroundImage: `url(/img/dfc/caso5.jpg)` }}
                    />
                    <div className="cont">
                      <h6 className="color-font">
                        <a href="#0">{t('home.projects.project_4_program')}</a>
                      </h6>
                      <h4>
                        <Link
                          href={`/project-details/`}
                        >
                          {t('home.projects.project_4')}
                        </Link>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide" key={5}>
                  <div
                    className="content wow noraidus fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div
                      className="item-img bg-img wow imago"
                      style={{ backgroundImage: `url(/img/dfc/caso4.jpg)` }}
                    />
                    <div className="cont">
                      <h6 className="color-font">
                        <a href="#0">{t('home.projects.project_5_program')}</a>
                      </h6>
                      <h4>
                        <Link
                          href={`/project-details/`}
                        >
                          {t('home.projects.project_5')}
                        </Link>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

              <div
                ref={navigationNextRef}
                className="swiper-button-next swiper-nav-ctrl simp-next cursor-pointer"
              >
                <span className="simple-btn right">Sig</span>
              </div>
              <div
                ref={navigationPrevRef}
                className="swiper-button-prev swiper-nav-ctrl simp-prev cursor-pointer"
              >
                <span className="simple-btn">Ant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
