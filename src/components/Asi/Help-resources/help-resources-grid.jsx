/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../../common/initIsotope";
import { useTranslation } from 'react-i18next';

const ResourcesGrid = ({ grid, hideFilter, filterPosition }) => {
  const { t } = useTranslation();
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section
      className={`${
        grid ? (grid === 3 ? "three-column" : null) : null
      } portfolio section-padding pb-70`}
    >
      <div className={"container"}>
        <div className="row">
          {!hideFilter && (
            <div
              className={`filtering ${
                filterPosition === "center"
                  ? "text-center"
                  : filterPosition === "left"
                  ? "text-left"
                  : "text-right"
              } col-12`}
            >
              <div className="filter">
                <span className="select-category active i18n" data-i18n="help_resources.menu_all" data-filter='*'>
                  {t('help_resources.menu_all')}
                </span>
                <span className="select-category i18n" data-i18n="help_resources.menu_videos" data-filter='.video_help'>
                  {t('help_resources.menu_videos')}
                </span>
                <span className="select-category i18n" data-i18n="help_resources.menu_tutorials" data-filter='.tutorial'>
                  {t('help_resources.menu_tutorials')}
                </span>
                <span className="select-category i18n" data-i18n="help_resources.menu_documents" data-filter='.document'>
                  {t('help_resources.menu_documents')}
                </span>
              </div>
            </div>
          )}

          <div className="gallery full-width">
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items wow fadeInUp video_help tutorial`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow show_resource_help">
                  <img src="/img/asi/resource_help/11.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              <div className="cont">
                <h6 className="i18n" data-i18n="help_resources.title_help_1">
                  {t('help_resources.title_help_1')}
                </h6>
                <span>
                  <a className="i18n" data-i18n="help_resources.video">
                    {t('help_resources.video')}
                  </a>, <a className="i18n" data-i18n="help_resources.tutorial">
                    {t('help_resources.tutorial')}
                  </a>
                </span>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items wow fadeInUp video_help tutorial`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow show_resource_help">
                  <img src="/img/asi/uns/7.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              <div className="cont">
                <h6 className="i18n" data-i18n="help_resources.title_help_2">{t('help_resources.title_help_2')}</h6>
                <span><a href="#0" className="i18n" data-i18n="help_resources.video">{t('help_resources.video')}</a>, <a href="#0" className="i18n" data-i18n="help_resources.tutorial">{t('help_resources.tutorial')}</a></span>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items wow fadeInUp video_help`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow show_resource_help">
                  <img src="/img/asi/resource_help/2.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              <div className="cont">
                <h6 className="i18n" data-i18n="help_resources.title_help_3">
                  {t('help_resources.title_help_3')}
                </h6>
                <span>
                  <a href="#0" className="i18n" data-i18n="help_resources.video">
                    {t('help_resources.video')}
                  </a>
                </span>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items tutorial document wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow show_resource_help_document">
                  <img src="/img/asi/uns/8.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              <div className="cont">
                <h6 className="i18n" data-i18n="help_resources.title_help_4">
                  {t('help_resources.title_help_4')}
                </h6>
                <span>
                  <a href="#0" className="i18n" data-i18n="help_resources.tutorial">
                    {t('help_resources.tutorial')}
                  </a>, 
                  <a href="#0" className="i18n" data-i18n="help_resources.document">
                    {t('help_resources.document')}
                  </a>
                </span>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items wow fadeInUp video_help tutorial`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/img/asi/resource_help/4.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              <div className="cont">
                <h6 className="i18n" data-i18n="help_resources.title_help_5">{t('help_resources.title_help_5')}</h6>
                <span>
                  <a href="#0" className="i18n" data-i18n="help_resources.tutorial">
                    {t('help_resources.tutorial')}
                  </a>, 
                  <a href="#0" className="i18n" data-i18n="help_resources.video">
                    {t('help_resources.video')}
                  </a>
                </span>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items wow fadeInUp video_help`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/img/asi/uns/9.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              <div className="cont">
                <h6 className="i18n" data-i18n="help_resources.title_help_6">
                  {t('help_resources.title_help_6')}
                </h6>
                <span><a href="#0" className="i18n" data-i18n="help_resources.video">{t('help_resources.video')}</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesGrid;
