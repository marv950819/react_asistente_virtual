/* eslint-disable @next/next/no-img-element */
import React, {useState} from "react";
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import toast, { Toaster } from 'react-hot-toast';

const QuestionContent = ({ imgSection }) => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const goHome = () => {
    window.location.href = "/evaluation";
  }
  
  const answerQuestion = (e) =>{
    e.preventDefault();
    let in_value = true;
    document.querySelectorAll('.in_form').forEach(function(input) {
      if( input.hasAttribute('required') && (input.value == "" || input.value == null) ){
        in_value = false;
      }
    });
    const next_question = "/question/file";
    const txt_success   = t('questions.address.txt_success');
    const txt_error     = t('questions.address.txt_error');

    if(in_value){
      toast.success(txt_success, {
        duration: 650,
      });
      setTimeout(function(){
        window.location.href = next_question;
      }, 650)
      
    }else{
      toast.error(txt_error);
    }
  }

  return (
    <section className="contact-sec style2 position-re pb-40">
      <Toaster 
        position="top-right"
        reverseOrder={false}
      /> 
      <div className="container">
          <div className="row justify-content-center mt-20">
            <div className="col-lg-11 col-xs-12 mx-auto">
              <div className="img-box">
                <div className="row">
                  <div className="col-12">
                    <div className="full-width">
                      <div className="img sizxl skills-circle card-question w-100 mb-30 wow fadeIn" data-wow-delay=".6">
                        <img src={imgSection} className="img-fluid" alt=""/>
                        <div className="p-2">
                          <h6 className="txt-color-blue fs-16 fs-question mt-20 mb-20 text-center">
                            {t('questions.address.title')}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mt-10">
                    <div className="row">
                        <div className="col-12 mb-3">
                          <p className="fs-16 txt-color-black">
                            {t('questions.address.instruction')}
                          </p>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="wow fadeIn" data-wow-delay="0.5s">
                            <form id="form-address" className="mt-5">
                              <div className="row mt-3">
                                <div className="col-lg-4 col-xs-12">
                                  <div className="form-group mt-5">
                                    <label htmlFor="answer_cp">
                                      {t('questions.address.form_cp')} <sup className="text-danger">*</sup>:
                                    </label>
                                    <input type="number" className="form-control in_form" id="answer_cp" />
                                  </div>
                                </div>
                                <div className="col-lg-4 col-xs-12">
                                  <label htmlFor="answe_country" className="col-form-label">
                                    {t('questions.address.form_country')} <sup className="text-danger">*</sup>:
                                  </label>
                                  <select className="form-control select2 select2-dropdown in_form" id="answe_country" required>
                                    <option value="">
                                      {t('questions.address.select_option')}
                                    </option>
                                    <option value="usa">USA</option>
                                    <option value="mexico">México</option>
                                    <option value="venezuela">Venezuela</option>
                                    <option value="chile">Chile</option>
                                    <option value="colombia">Colombia</option>
                                    <option value="peru">Perú</option>
                                  </select>
                                </div>
                                <div className="col-lg-4 col-xs-12">
                                  <div className="form-group mt-5">
                                    <label htmlFor="answer_state">
                                      {t('questions.address.form_state')}<sup className="text-danger">*</sup>:
                                    </label>
                                    <input type="text" className="form-control in_form" id="answer_state" required />
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-12 mt-3">
                                  <div className="form-group mt-5">
                                    <label htmlFor="answer_city">
                                    {t('questions.address.form_city')} <sup className="text-danger">*</sup>:
                                    </label>
                                    <input type="text" className="form-control in_form" id="answer_city" required />
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-12 mt-3">
                                  <div className="form-group mt-5">
                                    <label htmlFor="answer_colony">
                                    {t('questions.address.form_colony')} <sup className="text-danger">*</sup>:</label>
                                    <input type="text" className="form-control in_form" id="answer_colony" required />
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12 mt-2">
                                  <div className="form-group mt-5">
                                    <label htmlFor="answer_street">
                                      {t('questions.address.form_street')} <sup className="text-danger">*</sup>:
                                    </label>
                                    <input type="text" className="form-control in_form" id="answer_street" required />
                                  </div>
                                </div>
                                <div className="col-lg-6 col-xs-12 mt-2">
                                  <div className="form-group mt-5">
                                    <label htmlFor="answer_num_ext">
                                      {t('questions.address.form_num_ext')} <sup className="text-danger">*</sup>:</label>
                                    <input type="text" className="form-control in_form" id="answer_num_ext" required />
                                  </div>
                                </div>
                                <div className="col-lg-6 col-xs-12 mt-2">
                                  <div className="form-group mt-5">
                                    <label htmlFor="answer_int">
                                      {t('questions.address.form_num_int')}
                                    </label>
                                    <input type="text" className="form-control in_form" id="answer_int" />
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="col-12 mt-30 mb-20 d-flex justify-content-between">
                          <Link href={`/help-resources`}>
                            <a target="_blank" className="butn butn-question light curve wow fadeInUp btn-box-shadow ml-20 d-flex align-items-center" data-wow-delay=".3s">
                              <span className="icon pe-7s-help1 fs-25"></span> 
                              <span className="fs-14 ml-2 i18n" data-i18n="questions.btn_help">
                                {t('questions.btn_help')}
                              </span>
                            </a>
                          </Link>
                          <button type="button" id="btn_home" className="butn butn-question light curve wow fadeInUp btn-box-shadow ml-20 d-flex align-items-center" onClick={handleShow} data-wow-delay=".6s">
                            <span className="icon pe-7s-home fs-25"></span> <span className="fs-14 ml-2">
                              {t('questions.btn_home')}
                            </span>
                          </button>
                          <button type="button" id="btn_confirm" className="butn butn-question dark curve wow fadeInUp btn-box-shadow d-flex align-items-center" onClick={answerQuestion} data-wow-delay=".9s">
                            <span className="fs-16">{t('questions.btn_answer_question')}</span>
                          </button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>

      <Modal show={show} onHide={handleClose} size="md">
        <Modal.Header>
          <Modal.Title className="fs-20">
            {t('questions.title_return')}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="fs-16 fw-300 txt-color-black text-center">
            {t('questions.question_return')}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          {t('questions.btn_cancel')}
          </Button>
          <Button variant="primary" onClick={goHome}>
          {t('questions.btn_accept')}
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default QuestionContent;