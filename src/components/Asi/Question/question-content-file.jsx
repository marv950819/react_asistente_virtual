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

  const goHome = () =>{
    window.location.href = "/evaluation";
  }
  
  const answerQuestion = (e) =>{
    e.preventDefault();
    let in_value = true;
    document.querySelectorAll('.in-file-ans').forEach(function(input) {
      if(input.value == "" || input.value == null){
        in_value = false;
      }
    });

    const next_question = "/question/check";
    const txt_success   = t('questions.file.txt_success');
    const txt_error     = t('questions.file.txt_error');

    if(in_value){
      toast.success(txt_success, {
        duration: 750,
      });
      setTimeout(function(){ window.location.href = next_question; }, 750)
    }else{
      toast.error(t(txt_error));
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
                          {t('questions.file.title')}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 mt-10">
                  <div className="col-12 mb-3">
                    <p className="fs-16">{t('questions.file.instruction')}</p>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="wow fadeIn" data-wow-delay="0.5s">
                      <form className="mt-5">
                        <div className="form-group">
                          <label htmlFor="answer_file_1">{t('questions.file.answer_1')}</label>
                          <input type="file" className="form-control in-file-ans" id="answer_file_1" min="1" step="1" />
                        </div>
                        <div className="form-group mt-4">
                          <label htmlFor="answer_file_2">{t('questions.file.answer_2')}</label>
                          <input type="file" className="form-control in-file-ans" id="answer_file_2" min="1" step="1" />
                        </div>
                      </form>
                    </div>
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