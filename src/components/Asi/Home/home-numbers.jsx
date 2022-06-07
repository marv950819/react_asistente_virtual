import React from 'react';
import { useTranslation } from 'react-i18next';
import Split from "../../Split";
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";


const Numbers = () => {
  const { t } = useTranslation();
  React.useEffect(() => {
    console.clear();
  })
    return (
      <section className="number-sec section-padding">
        <div className="container">
          <div className="row">
            
            <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay=".3s">
              <div className="item no-bord sm-mb50">
                <span className={`color-font icon pe-7s-users`}></span>
                <h3 className="">
                  &nbsp;
                  <CountUp redraw={true} end="2539" duration="3">
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span className="count" ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h3>
                <Split>
                  <p className="wow txt words chars splitting" data-splitting>
                    {t('home.counters.participants')}
                  </p>
                </Split>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay=".6s">
              <div className="item no-bord sm-mb50">
                <span className={`color-font icon pe-7s-portfolio`}></span>
                <h3 className="">
                  &nbsp;
                  <CountUp redraw={true} end="133" duration="3">
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span className="count" ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h3>
                <Split>
                  <p className="wow txt words chars splitting" data-splitting>
                    {t('home.counters.financial_partners')}
                  </p>
                </Split>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay=".9s">
              <div className="item no-bord sm-mb50">
                <span className={`color-font icon pe-7s-notebook`}></span>
                <h3 className="">
                  &nbsp;
                  <CountUp redraw={true} end="426" duration="3">
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span className="count" ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h3>
                <Split>
                  <p className="wow txt words chars splitting" data-splitting>
                    {t('home.counters.registered_projects')}
                  </p>
                </Split>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="1.2s">
              <div className="item no-bord sm-mb50">
                <span className={`color-font icon pe-7s-medal`}></span>
                <h3 className="">
                  &nbsp;
                  <CountUp redraw={true} end="217" duration="3">
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span className="count" ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h3>
                <Split>
                  <p className="wow txt words chars splitting" data-splitting>
                    {t('home.counters.financing_granted')}
                  </p>
                </Split>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    );
}

export default Numbers