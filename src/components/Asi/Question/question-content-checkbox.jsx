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

  const [show_end, setShowEnd] = useState(false);
  const handleCloseEnd = () => setShowEnd(false);
  const handleShowEnd = () => setShowEnd(true);
  
  const goHome = () =>{
    window.location.href = "/evaluation";
  }

  const goNextSection = () =>{
    window.location.href = "/results";
  }

  const answers = {
    "option_1": t('questions.checkbox.answer_1'),
    "option_2": t('questions.checkbox.answer_2'),
    "option_3": t('questions.checkbox.answer_3'),
    "option_4": t('questions.checkbox.answer_4'),
    "option_5": t('questions.checkbox.answer_5'),
    "option_6": t('questions.checkbox.answer_6'),
    "option_7": t('questions.checkbox.answer_7'),
    "option_8": t('questions.checkbox.answer_8'),
    "option_9": t('questions.checkbox.answer_9'),
    "option_10": t('questions.checkbox.answer_10'),
    "option_11": t('questions.checkbox.answer_11'),
    "option_12": t('questions.checkbox.answer_12'),
    "option_13": t('questions.checkbox.answer_13'),
    "option_14": t('questions.checkbox.answer_14'),
    "option_15": t('questions.checkbox.answer_15'),
    "option_16": t('questions.checkbox.answer_16'),
    "option_17": t('questions.checkbox.answer_17'),
    "option_18": t('questions.checkbox.answer_18'),
    "option_19": t('questions.checkbox.answer_19'),
    "option_20": t('questions.checkbox.answer_20'),
    "option_21": t('questions.checkbox.answer_21'),
    "option_22": t('questions.checkbox.answer_22'),
    "option_23": t('questions.checkbox.answer_23'),
    "option_24": t('questions.checkbox.answer_24'),
  }
  
  const answerQuestion = (e) =>{
    e.preventDefault();
    toast.success(t('questions.address.txt_success'), {
      duration: 1500,
    });
    handleShowEnd();
  }

  const printAnswers = (section) =>{
    let tmp   = Math.ceil(Object.keys(answers).length/2)
    let html  = [], item  = null, count = 0;
 
    for (const key in answers){
      count++;
      item = <div className="form-check mt-3">
              <input className="form-check-input" type="checkbox" name="answer_question" id={`answer_${count}`}/>
              <label className="form-check-label" htmlFor={`answer_${count}`}>
                {answers[key]}
              </label>
            </div>;

      if( section == 1 && count <= tmp ){
        html.push(item);
      }else if(section == 2 && count > tmp){
        html.push(item);
      }
    }
    return html;
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
                          {t('questions.checkbox.title')}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 mt-10">
                  <div className="row">
                    <div className="col-12">
                      <p className="fs-16 txt-color-black">
                        {t('questions.checkbox.instruction')}
                      </p>
                    </div>
                    <div className="col-lg-6 col-md-12 wow fadeIn p-3" data-wow-delay="0.5s">
                      { printAnswers(1) }
                    </div>
                    <div className="col-lg-6 col-md-12 wow fadeIn p-3" data-wow-delay="0.5s">
                      { printAnswers(2) }
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

      <Modal show={show_end} onHide={handleCloseEnd} size="lg">
        <Modal.Header>
          <Modal.Title className="fs-20">
            {t('questions.title_congrats')}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-center fs-18 fw-400 txt-color-blue">
            {t('questions.txt_congrats_1')} <strong>{t('questions.txt_congrats_2')}</strong>, <span>{t('questions.txt_congrats_3')}</span>.
          </p>
          <div className="text-center mt-4">
            <img src="/img/asi/felicidades3.jpg" alt="Felicidades" className="img-fluid" />
          </div>
          <p className="text-center fs-16 fw-500 txt-color-blue mt-5">
            {t('questions.txt_select_option')}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-info" onClick={goHome}>
            {t('questions.btn_congrats_menu')}
          </Button>
          <Button variant="primary" onClick={goNextSection}>
            {t('questions.btn_congrats_continue')}
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default QuestionContent;