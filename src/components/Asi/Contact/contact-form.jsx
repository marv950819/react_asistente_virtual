import React from "react";
import { Formik, Form, Field } from "formik";
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const messageRef = React.useRef(null);
  const { t } = useTranslation();

  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="form md-mb50">
              <h4 className="fw-700 color-font mb-50 i18n" data-i18n="contact.subtitle_1">{t('contact.subtitle_1')}</h4>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  message: "",
                }}
                onSubmit={async (values) => {
                  await sendMessage(500);
                  alert(JSON.stringify(values, null, 2));
                  
                  // show message
                  messageRef.current.innerText = "El mensaje se ha enviado de forma correcta. Te responderemos a la brevedad";

                  // Reset the values
                  values.name = "";
                  values.email = "";
                  values.message = "";
                  // clear message
                  setTimeout(() => {
                    messageRef.current.innerText = ''
                  }, 2000)
                }}
              >
                {({ errors, touched }) => (
                  <Form id="contact-form">
                    <div className="messages" ref={messageRef}></div>
                    <div className="controls">
                      <div className="form-group">
                        <label htmlFor="form_name" className="i18n" data-i18n="contact.in_name">
                          {t('contact.in_name')}
                        </label>
                        <Field
                          id="form_name"
                          type="text"
                          name="name"
                          required="required"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="form_email" className="i18n" data-i18n="contact.in_email">
                          {t('contact.in_email')}
                        </label>
                        <Field
                          validate={validateEmail}
                          id="form_email"
                          type="email"
                          name="email"
                        />
                        {errors.email && touched.email && (
                          <div>{errors.email}</div>
                        )}
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="form_message" className="i18n" data-i18n="contact.in_message">
                        {t('contact.in_message')}
                      </label>
                      <Field
                        as="textarea"
                        id="form_message"
                        name="message"
                        rows="4"
                        required="required"
                      />
                    </div>

                    <button type="submit" className="butn dark btn-box-shadow">
                      <span className="i18n" data-i18n="contact.btn_send">
                        {t('contact.btn_send')}
                      </span>
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="cont-info">
              <h4 className="fw-700 color-font mb-50 i18n" data-i18n="contact.subtitle_2">
                {t('contact.subtitle_2')}
              </h4>
              <h3 className="wow i18n" data-i18n="contact.txt_generals" data-splitting>
                {t('contact.txt_generals')}
              </h3>
              <div className="item mb-40">
                  <h6><a href="mailto:info@dfc.gov">info@dfc.gov</a></h6>
                  <h6>+1 (202) 336-8400</h6>
              </div>
              <h3 className="wow i18n" data-i18n="contact.name_office" data-splitting>
                {t('contact.name_office')}
              </h3>
              <div className="item">
                <h6>1100 New York Avenue, NW, Washington, DC 20527</h6>
              </div>
              <div className="social mt-50">
                  <a href="#0" className="icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
