/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
import RegisterHeader from "../../components/Asi/Register/Header";
import '../i18n';

const Register = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    document.querySelector("body").classList.add("contact-page");
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
    return () => {
      document.querySelector("body").classList.remove("contact-page");
    };
  }, [navbarRef]);

  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <RegisterHeader />
      <div className="main-content">
        <Footer hideBGCOLOR="#1c3460" />
      </div>

      {/* Modal: Términos y condiciones */ }
      <div id="modal_terminos" className="modal fade" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title i18n" data-i18n="register.txt_terms_conditions">Términos y condiciones</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h6 className="mt-2">Title A</h6>
              <p className="txt-color-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quia, assumenda cum labore esse dignissimos magnam, a amet sint laboriosam consequatur voluptates! Rerum exercitationem tempore tenetur et? Molestias, dolorem eius?</p>
              <ul className="ml-3">
                <li className="fw-300">- Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li className="fw-300">- Optio ipsa recusandae nihil nobis iste perspiciatis nemo aspernatur?</li>
                <li className="fw-300">- Sunt, expedita, earum adipisci animi corrupti similique velit consequuntur doloremque quidem exercitationem at.</li>
              </ul>
              <p className="txt-color-black text-justify">I. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolore labore quasi necessitatibus sint ab maiores quaerat facere explicabo reprehenderit odio quam, impedit natus architecto corporis assumenda soluta nam officia.</p>
              <p className="txt-color-black text-justify">II. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nihil, ex repellendus beatae error odio ratione natus dolorem, exercitationem eos totam. Maiores amet fuga itaque suscipit! Impedit aspernatur totam aperiam.</p>
              <p className="txt-color-black text-justify">III. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ex numquam doloremque laborum, distinctio quis blanditiis natus vero voluptatum debitis eaque, consectetur aliquid, modi tempora fugit expedita fugiat atque suscipit.</p>
              
              <h6 className="mt-4">Title B</h6>
              <p className="txt-color-black text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolore labore quasi necessitatibus sint ab maiores quaerat facere explicabo reprehenderit odio quam, impedit natus architecto corporis assumenda soluta nam officia.</p>
              <p className="txt-color-black text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nihil, ex repellendus beatae error odio ratione natus dolorem, exercitationem eos totam. Maiores amet fuga itaque suscipit! Impedit aspernatur totam aperiam.</p>
              <p className="txt-color-black text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ex numquam doloremque laborum, distinctio quis blanditiis natus vero voluptatum debitis eaque, consectetur aliquid, modi tempora fugit expedita fugiat atque suscipit.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </LightTheme>
  );
};

export default Register;